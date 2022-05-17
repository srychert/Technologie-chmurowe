# ReplicaSet

## Zadanie 1
`docker build -t react-frontend -f .\Dockerfile.dev .` <br />
`kubectl apply -f .\replicaset-forntend.yaml` <br />

![ScreenShot](zad1.PNG) <br/>
![ScreenShot](zad1-pod.PNG) <br/>

## Zadanie 2
`docker tag react-frontend:latest react-frontend:release0` <br/>
`kubectl apply -f .\service-frontend.yaml` <br />
`kubectl rollout status deployment frontend` <br />

![ScreenShot](zad2-deployment-status.PNG) <br/>

`docker build -t react-frontend:release1 -f .\Dockerfile.dev .` <br />
`kubectl set image deployment/frontend react-frontend=react-frontend:release1` <br />

![ScreenShot](zad2-update-image.PNG) <br/>
