import json
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def getItems():
    return {"message": "Hello World"}


@app.get("/{id}")
async def getItem(id:str) ->json: 
    result = { "item" : id }
    return result
