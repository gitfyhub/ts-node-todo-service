### To start docker

```
docker build -t webappnode .
docker run -p 5000:5000 webappnode
```

### To start docker compose and then build 2 steps commands

```
docker-compose build
docker-compose up
```

### To start docker compose and build 1 step command

```
docker-compose up --build
```