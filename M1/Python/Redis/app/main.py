import json
from redis import Redis, RedisError
from fastapi import FastAPI

app = FastAPI()
r = Redis(host="redis", port=6379, db=0)

@app.get("/")
async def main():
    try:
        r.set_response_callback('get', int)
        r.incr('hits')    
    except:
        RedisError("Error connecting to redis database")
        
    return "user charged page {}".format(r.get('hits'))
