import json
from os import stat
from re import template
from fastapi import Depends, FastAPI, HTTPException, Request, Response,responses
# from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
from pathlib import Path

from . import crud, models, schemas
from .database import SessionLocal, engine

from fastapi.testclient import TestClient
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# BASE_DIR = Path(__file__).resolve().parent
# templates = Jinja2Templates(directory=str(Path(BASE_DIR, 'templates')))


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionLocal()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get('/')
def welcome():
    welcome = {'response' : 'welcome'}
    return welcome

@app.get("/items/", response_model=list[schemas.Item])
def get_items(db: Session = Depends(get_db)):
    items = crud.get_items(db)
    return items


@app.get("/item/{item_id}")
def get_item(item_id:int, db: Session = Depends(get_db)):
    item = crud.get_item(db, item_id=item_id)
    return item
    

@app.post("/items/create")
def create_item(item: schemas.ItemCreate, request: Request, db: Session= Depends(get_db)):
    db_item = crud.create_item( db= db, item=item )
    return db_item


@app.put("/items/{item_id}")
def update_item(item_id:int, item: schemas.ItemCreate, db:Session= Depends(get_db)):
    item = crud.update_item(db = db, item_id = item_id, item=item )
    return item
    
    
@app.delete("/items/{item_id}")
def delete_user(item_id : int, db:Session = Depends(get_db)):
    delete_item = crud.delete_item(db=db, item_id = item_id)
    return delete_item


client = TestClient(app)

def test_get_all_items():
    response = client.get('/items')
    assert  response.status_code == 200
    

def test_get_item():
    response = client.get('/items/1')
    assert  response.status_code == 404
    assert response.json() == { "detail": "Item not found" }
    
def test_create_item():
    response = client.post('/items/', json = {
            "title": "title test",
            "description": "description test",
        }
    )
    assert  response.status_code == 200
    assert response.json() == { "detail": "item created" }
    