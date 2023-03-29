# Create a network

```shell
docker network create exonet
```
## <br>

# ubuntu-mysql-client


## Create image 

```shell
docker build -t ubuntu-mysql-client .
```

## Create a container 
```shell
docker run --name ubuntu-mysql-client-containre -it --entrypoint=/bin/bash --net=exonet ubuntu-mysql-client
```


## <br>

# Mysql

## craete a container

```shell
docker run --name mysql-exo3 --net=exonet -e MYSQL_ROOT_PASSWORD=123321 -d mysql
```

## <br>
# Testing 
## Coonect ubuntu-mysql-client to mysql-exo3

```shell
mysql -u root -p -h mysql-exo3
```



## <br>
## <br>
## <br>

# Note !!!

> si la création de l'image fonctionne pas, pense à désactiver `docker buildkit` :
- **sois** depuis docker desktop
- **sois** `DOCKER_BUILDKIT=0  docker build -t miniflaskapp .
`
