#  Networks, volumes

`docker network connect <nazwa>` Connect a container to a network <br/>
`docker network create <nazwa>` Create a network <br/>
`docker network disconnect <nazwa>` Disconnect a container from a network <br/>
`docker network inspect <nazwa>` Display detailed information on one or more networks <br/>
`docker network ls` List networks <br/>
`docker network rm <nazwa>` Remove one or more networks <br/>
`docker network prune` Remove all unused networks <br/>

## Zadanie 1

`docker run --name first -p 80:80 -d nginx` <br/>
Utworzony kontener należy do sieci bridge

![ScreenShot](zad1/networks.PNG) <br/>

- None -> This mode will not configure any IP for the container and doesn’t have any access to the external network as well as for other containers. It does have the loopback address and can be used for running batch jobs.

- Host -> In this mode container will share the host’s network stack and all interfaces from the host will be available to the container. The container’s host name will match the host name on the host system

- Bridge -> It is the Docker default networking mode which will enable the connectivity to the other interfaces of the host machine as well as among containers.

## Zadanie 2

`docker run --name second --network=firstNetwork -p 3000:80 -d nginx` <br/>
`docker network inspect firstNetwork` <br/>

![ScreenShot](zad2/inspect.PNG) <br/>


## Zadanie 3

`docker network connect firstNetwork first` <br/>
`docker network inspect firstNetwork` <br/>

![ScreenShot](zad3/connect.PNG) <br/>


## Zadanie 4

![ScreenShot](zad4/remove.PNG) <br/>

## Zadanie 5

`docker volume create pgdata` <br/>
`docker run -d -p 5432:5432 --name my-postgres-with-volume -e POSTGRES_PASSWORD=tajne -v pgdata:/var/lib/postgresql/data postgres` <br/>

CREATE TABLE IF NOT EXISTS users (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);

INSERT INTO users(username, password, email) VALUES ('example_user', 'example_password', 'user@example.com');

![ScreenShot](zad5/pg_volume.PNG) <br/>

## Zadanie 6

`docker container run --name redis-server-2 -d -p 6379:6379 redis` <br/>
`docker network create bazy` <br/>
`docker network connect bazy redis-server-2` <br/>
`docker network connect bazy my-postgres-with-volume` <br/>
`docker network inspect bazy` <br/>

![ScreenShot](zad6/bazy.PNG) <br/>

## Zadanie 7

### Step 1
Create volume for postgres database <br />
`docker volume create pgnwd` <br />

Create Network </br>
`docker network create --subnet 172.20.0.0/16 nwd` <br />

### Step 2
Run postgres container with volume <br />
`docker run -d -p 5432:5432 --name postgres-nwd -e POSTGRES_PASSWORD=tajne -v pgnwd:/var/lib/postgresql/data postgres` <br />

Connect db to network and specify ip <br />
`docker network connect --ip 172.20.0.5 nwd postgres-nwd` <br />

### Step 3
Run redis-cache container
`docker run -d --name redis-cache -p 6379:6379 redis` <br />

Connect cache to network and specify ip <br />
`docker network connect --ip 172.20.0.6 nwd redis-cache` <br />

### Step 4
Build api image (must be in api folder) <br />
`docker build -t api -f .\Dockerfile.dev .` <br/>

Run api container in dev mode <br />
`docker run --name api_c -it --rm -p 4000:4000 --network=nwd -v D:\Technologie-chmurowe\lab05\zad7\api:/app -v /app/node_modules api` <br/>

### Step 5
Try it <br />
`curl "localhost:4000/api/nwd?x=16&y=14"` -> {"id":1,"nwd":2} <br />
