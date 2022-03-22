## Dockefile wstęp

# Zadanie 1
`docker run --name some-nginx -d -p 4200:80 nginx:latest` <br />
-d, --detach -> Run container in background and print container ID <br />
-p, --publish list -> Publish a container's port(s) to the host <br />

# Zadanie 2
`docker build -t <nazwa> .` <br />
`docker build -t mybusybox .\zad2\.` <br />
`docker run -it mybusybox` <br />

![ScreenShot](zad2/zad2.PNG) <br />

# Zadanie 3
`docker build -t myngnix .\zad3\.` <br />
`docker run -d -p 4200:80 myngnix` <br />

![ScreenShot](zad3/zad3.PNG) <br />