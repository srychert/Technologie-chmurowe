# Getting started

`docker run hello-world` # downloads image if not localy and runs <br />
`docker pull hello-world` # only download image <br />
`docker ps` <br />
`docker ps -a` <br />
`dokcer start <id||name>` # returns id || name <br />
`docker start -a <id||name>` # shows result of command in terminal <br />

-   start -> id or name
-   run -> image name

1. Run: create a new container of an image, and execute the container. You can create N clones of the same image. The command is: `docker run IMAGE_ID` **and not** `docker run CONTAINER_ID`

![ScreenShot](h1.PNG)

2. Start: Launch a container previously stopped. For example, if you had stopped a database with the command `docker stop CONTAINER_ID`, you can relaunch the same container with the command `docker start CONTAINER_ID`, and the data and settings will be the same.

![ScreenShot](h2.PNG)

`docker image ls` <br />
`docker run -e <variable> <id||name>` # some require to set env variables <br />
`docker rm <id|name>` <br />
`docker system prune [OPTIONS]` <br /> # Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.
