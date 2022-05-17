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

## Zadanie 3
`kubectl rollout history deployment frontend` <br />

![ScreenShot](zad3-history.PNG) <br/>

Add `--record` at the end of `kubectl ...` command
 > --record: Record current kubectl command in the resource annotation. If set to false, do not record the command. If set to true, record the command. If not set, default to updating the existing annotation value only if one already exists.

`kubectl rollout undo deployment/frontend` <br />
`kubectl rollout undo deployment/frontend --to-revision=2` <br />
