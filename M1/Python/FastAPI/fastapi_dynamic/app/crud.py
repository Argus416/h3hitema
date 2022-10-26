from fastapi import HTTPException
from sqlalchemy.orm import Session

from . import models, schemas


def get_items(db: Session ):
    return db.query(models.Item).all()


def get_item(db: Session, item_id: int ):
    try:
        return db.query(models.Item).filter(models.Item.id == item_id).one()
    except Exception as e:
        print(e)
        raise HTTPException(status_code=404, detail="Item not found")


def create_item(db: Session, item: schemas.ItemCreate):
    try:
        db_item = models.Item(**item.dict())
        db.add(db_item)
        db.commit()
        db.refresh(db_item)
        return db_item
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail="Can't create item, please contact the support")


def update_user(db: Session, item_id: int, item: schemas.ItemCreate):
    errorMessage = HTTPException(status_code=500, detail="Can't update item, please contact the support")
    try:
        item_update_body= item.dict()
        update_item = db.query(models.Item).filter(models.Item.id == item_id).update(item_update_body)
        db.commit()
        
        if(delete_item == 0):
            raise errorMessage

        return item_update_body
            
    except Exception as e:
        print(e)
        raise errorMessage
    
def delete_item(db:Session, item_id: int):
    errorMessage = HTTPException(status_code=500, detail="Can't delete item, please contact the support")
    try:
        delete_item = db.query(models.Item).filter(models.Item.id == item_id).delete()
        db.commit()
        if(delete_item == 0):
            raise errorMessage
            
        return {"response": "Item deleted"}
        
    except Exception as e:
        print(e)
        raise errorMessage
