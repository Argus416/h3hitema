FROM ubuntu:latest

RUN apt update && apt upgrade -y

RUN apt install -y nginx-full nano wget curl telnet

RUN cd /etc/nginx/sites-available

RUN cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.old

# RUN mkdir /etc/nginx/sites-available

# RUN mkdir /etc/nginx/sites-enabled


# newproxy
# docker run -it --name=nginx-container -p 8080:80 --entrypoint=/bin/bash  --net=newproxy nginx-cus
# docker run --name miniflaskapp_container  --net=newproxy -d miniflaskapp
