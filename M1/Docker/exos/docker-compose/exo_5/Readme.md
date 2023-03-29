# FLASK APPLICATION


## Create image 

```shell
docker build -t miniflaskapp .
```

## Create a container 
```shell
docker run --name miniflaskapp_container  -p 80:80 -d miniflaskapp
```

## Check logs 

```shell
docker logs miniflaskapp_container
```

## <br>

# Mysql 

```shell
docker run --name mysql-exo3 -p 8081:3306 -p 8082:33060  -e MYSQL_ROOT_PASSWORD=123321 -d mysql
```


## Note !!!

> si la création de l'image fonctionne pas, pense à désactiver `docker buildkit` :
- **sois** depuis docker desktop
- **sois** `DOCKER_BUILDKIT=0  docker build -t miniflaskapp .
`
