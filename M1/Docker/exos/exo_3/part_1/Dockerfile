# syntax=docker/dockerfile:1

FROM ubuntu:latest

## Installer python 
RUN apt update && apt upgrade -y

RUN apt autoremove -y

RUN apt autoclean -y

RUN apt install python3 python3-pip -y

RUN python3 --version

COPY . .

RUN pip3 install flask

EXPOSE 80

CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]
