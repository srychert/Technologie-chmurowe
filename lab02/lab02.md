# Docker create cd.

`docker pull busybox` <br />
`docker run -it busybox sh` <br />

- -t -> Allocate a pseudo-TTY
- -i -> (--interactiveKeep) STDIN open even if not attached

`echo 'hello world! I’m busybox!'` # print msg <br />

![ScreenShot](zad1-2.PNG)

`docker exec -it eda4011e968c sh` # Run a command in a running container <br />
`echo "My first file" > readme.txt` # command inside container shell <br />

![ScreenShot](zad3-4.PNG)

Stworzony plik w znjaduje się w innym kontenerze. <br />
Komenda `docker run` tworzy nowey kontener z obrazu. <br />

- In order to execute multiple commands using the “docker exec” command, execute “docker exec” with the “sh||bash” process and use the “-c” option to read the command as a string.

`docker exec <container> bash -c "command1 ; command2 ; command3"` <br />
`docker exec c43ac9f8afb3 sh -c "echo 'Created from outside' > createdFile.txt"` <br />

`docker create --name my_container busybox echo "‘Hello world from my container"` <br />

![ScreenShot](zad6.PNG)
