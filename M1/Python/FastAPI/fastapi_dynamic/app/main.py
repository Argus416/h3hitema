import json
from os import stat
from fastapi import Depends, FastAPI, HTTPException, Request, Response
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionLocal()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get('/')
def welcome():
    return {"text": "Weldscomexd dddd :3"}

@app.get("/items/", response_model=list[schemas.Item])
def read_items(db: Session = Depends(get_db)):
    items = crud.get_items(db)
    return items

@app.get("/items/{item_id}", response_model=schemas.Item)
def get_item(item_id:int , db: Session = Depends(get_db)):
    item = crud.get_item(db, item_id=item_id)
    return item

@app.post("/items/", response_model=schemas.Item)
def create_item(item: schemas.ItemCreate, db: Session= Depends(get_db)):
    db_item = crud.create_item( db= db, item=item )
    return db_item

@app.put("/items/{item_id}")
def update_item(item_id:int, item: schemas.ItemCreate, db:Session= Depends(get_db)):
    item = crud.update_user(db = db, item_id = item_id, item=item )
    return item
    
@app.delete("/items/{item_id}")
def delete_user(item_id : int, db:Session = Depends(get_db)):
    delete_item = crud.delete_item(db=db, item_id = item_id)
    return delete_item
