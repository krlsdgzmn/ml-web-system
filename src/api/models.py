from database import Base
from sqlalchemy import Column, Integer


class Prediction(Base):
    __tablename__ = "predictions"

    id = Column(Integer, primary_key=True)
    price_bin = Column(Integer)
    discount_bin = Column(Integer)
    month = Column(Integer)
    week = Column(Integer)
    distance_bin = Column(Integer)
    order_status = Column(Integer)
