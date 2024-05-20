from fastapi import FastAPI, Depends, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from sqlalchemy.orm import Session
from pydantic import BaseModel, conint
from database import SessionLocal, engine
import models
import pickle
import numpy as np
from fastapi.responses import RedirectResponse

# Initialize FastAPI app
app = FastAPI(
    title="MKSG Clothing Prediction API",
    description="API for predicting order status of MKSG Clothing",
    version="0.1",
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
    order_status: Optional[int] = None


# Pydantic model for database response
class PredictionModel(PredictionBase):
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
def encode_predictors(data: PredictionBase) -> np.ndarray:
    predictors = [
        data.price_bin,
        data.discount_bin,
        data.month,
        data.week,
        data.distance_bin,
    ]
    return np.array(predictors).reshape(1, -1)


# Helper function to make a prediction using the loaded model
def make_prediction(prediction_data: PredictionBase) -> int:
    predictors = encode_predictors(prediction_data)
    prediction = clf.predict(predictors)
    return int(prediction[0])


# Endpoint to create a new prediction
@app.post("/api/predictions/", response_model=PredictionModel)
async def create_prediction(prediction: PredictionBase, db: Session = Depends(get_db)):
    prediction.order_status = make_prediction(prediction)
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
    # skip: int = 0,
    # limit: int = 10,
):
    try:
        query = db.query(models.Prediction)
        if month is not None:
            query = query.filter(models.Prediction.month == month)
        if week is not None:
            query = query.filter(models.Prediction.week == week)
        if order_status is not None:
            query = query.filter(models.Prediction.order_status == order_status)

        # results = query.offset(skip).limit(limit).all()
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