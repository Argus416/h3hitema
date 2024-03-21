FROM ubuntu:latest

WORKDIR /app

RUN apt-get update

RUN apt-get upgrade -y

RUN apt-get install -y python3 python3-pip

COPY ./app.py ./app.py

RUN  ls -la

CMD [ "python3", "app.py" ]