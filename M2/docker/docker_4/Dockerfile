FROM ubuntu:latest

WORKDIR /usr/app

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y python3 python3-pip

RUN pip3 install flask

COPY ./app .

EXPOSE 4325

CMD ["python3", "-m", "flask", "run" ,"--host=0.0.0.0", "--port=4325"]
