from fastapi import FastAPI, Depends, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from sqlalchemy.orm import Session
from pydantic import BaseModel, conint
from database import SessionLocal, engine
import models
import pickle
import numpy as np
import pandas as pd
from fastapi.responses import RedirectResponse

# Initialize FastAPI app
app = FastAPI(
    title="MKSG Clothing Prediction API",
    description="API for predicting order status of MKSG Clothing",
    version="1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Redirect to https://mksg-clothing.onrender.com/docs
@app.get("/")
async def redirect_to_docs():
    return RedirectResponse(url="/docs")


# Load the pre-trained model
with open("model/random_forest.pkl", "rb") as f:
    clf = pickle.load(f)


# Pydantic model for prediction input
class PredictionBase(BaseModel):
    price_bin: int
    discount_bin: int
    month: int
    week: int
    distance_bin: int
    probability: Optional[int] = None
    order_status: Optional[int] = None


class ToDoListBase(BaseModel):
    task: str


# Pydantic model for database response
class PredictionModel(PredictionBase):
    id: int

    class Config:
        orm_mode = True


class ToDoListModel(ToDoListBase):
    id: int

    class Config:
        orm_mode = True


# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Create the database tables
models.Base.metadata.create_all(bind=engine)


# Helper function to encode prediction input data
def encode_predictors(data: PredictionBase) -> pd.DataFrame:
    predictors = {
        "price_bin": [data.price_bin],
        "discount_bin": [data.discount_bin],
        "month": [data.month],
        "week": [data.week],
        "distance_bin": [data.distance_bin],
    }
    return pd.DataFrame(predictors)


# Helper function to make a prediction using the loaded model
def make_prediction(prediction_data: PredictionBase) -> int:
    predictors_df = encode_predictors(prediction_data)
    prediction = clf.predict(predictors_df)
    return int(prediction[0])


def calculate_probability(prediction_data: PredictionBase) -> int:
    predictors_df = encode_predictors(prediction_data)
    probability = clf.predict_proba(predictors_df)
    positive_class_probability = probability[0][1]
    return int(positive_class_probability * 100)


# Endpoint to create a new prediction
@app.post("/api/predictions/", response_model=PredictionModel)
async def create_prediction(prediction: PredictionBase, db: Session = Depends(get_db)):
    prediction.order_status = make_prediction(prediction)
    prediction.probability = calculate_probability(prediction)
    db_prediction = models.Prediction(**prediction.dict())
    db.add(db_prediction)
    db.commit()
    db.refresh(db_prediction)
    return db_prediction


# Endpoint to read all predictions with optional filters
@app.get("/api/predictions/", response_model=List[PredictionModel])
async def read_predictions(
    db: Session = Depends(get_db),
    month: Optional[conint(ge=1, le=12)] = Query(
        None, description="Filter by month (1-12)"
    ),
    week: Optional[conint(ge=1, le=4)] = Query(
        None, description="Filter by week (1-4)"
    ),
    order_status: Optional[conint(ge=0, le=1)] = Query(
        None, description="Filter by order status (0 for cancelled, 1 for completed)"
    ),
):
    try:
        query = db.query(models.Prediction)
        if month is not None:
            query = query.filter(models.Prediction.month == month)
        if week is not None:
            query = query.filter(models.Prediction.week == week)
        if order_status is not None:
            query = query.filter(models.Prediction.order_status == order_status)

        results = query.all()
        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Endpoint to delete a prediction
@app.delete("/api/predictions/{prediction_id}/")
async def delete_prediction(prediction_id: int, db: Session = Depends(get_db)):
    db.query(models.Prediction).filter(models.Prediction.id == prediction_id).delete()
    db.commit()
    return {"message": "Prediction deleted successfully"}


# Endpoint to create a new task
@app.post("/api/todo_list/", response_model=ToDoListModel)
async def create_task(task: ToDoListBase, db: Session = Depends(get_db)):
    db_task = models.ToDoList(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


# Endpoint to read all tasks
@app.get("/api/todo_list/", response_model=List[ToDoListModel])
async def read_tasks(db: Session = Depends(get_db)):
    tasks = db.query(models.ToDoList).all()
    return tasks


# Endpoint to delete a task
@app.delete("/api/todo_list/{task_id}/")
async def delete_task(task_id: int, db: Session = Depends(get_db)):
    db.query(models.ToDoList).filter(models.ToDoList.id == task_id).delete()
    db.commit()
    return {"message": "Task deleted successfully"}
