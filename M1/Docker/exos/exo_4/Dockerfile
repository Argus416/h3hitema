FROM ubuntu:latest

RUN apt update && apt upgrade -y

RUN apt install -y nginx-full nano wget curl telnet

RUN cd /etc/nginx/sites-available

RUN cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.old

