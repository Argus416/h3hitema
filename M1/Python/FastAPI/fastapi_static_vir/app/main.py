import json
from fastapi import FastAPI
from fastapi import Depends, FastAPI, HTTPException, Request, Response,responses
from fastapi.templating import Jinja2Templates
from pathlib import Path

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent
templates = Jinja2Templates(directory=str(Path(BASE_DIR, 'templates')))

@app.get("/")
async def getItems(request: Request, ):
    return templates.TemplateResponse('index.html', {
            "request": request, 
            "title": "Home page",
        })

