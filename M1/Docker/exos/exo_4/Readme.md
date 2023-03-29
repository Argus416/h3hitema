# nginx-cus

## create iamge 

```shell
docker build -t nginx-cus .
```

## create container 

```shell
docker docker run -it --name=nginx-container -p 8080:80 --entrypoint=/bin/bash  --net=newproxy nginx-cus
```

After creating the containr, head to /etc/nginx/sites-available then add
```
location /proxy-rediction {
    proxy_pass http://miniflaskapp_container;
}
``` 

then start the server using `service nginx start`

Use `nginx -t` to debug


## <br>
## <br>

# Flask app

from the the third exo part_1, build the image then 
```shell
docker run --name miniflaskapp_container --net=newproxy -d miniflaskapp
```

## <br>

# Testing 
if you go to `http://localhost:8080/proxy-rediction`, you should see 
```
t'es dans le proxy
```

