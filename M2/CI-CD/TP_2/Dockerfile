FROM debian:stable
RUN apt-get update && apt-get upgrade -y && apt-get install -y apache2 telnet elinks curl openssh-server
COPY index.html /var/www/html/

EXPOSE 80
EXPOSE 22

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]

