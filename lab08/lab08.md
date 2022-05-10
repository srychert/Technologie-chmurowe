# K8s

## Zadanie 1

`kubectl apply -f .\first-pod.yaml` -> Make pod from file <br />
`kubectl exec -it first-pod -- /bin/sh` -> Access terminal <br />
`wget localhost:80` -> get resource hosted on port 80 <br />

Quick index.html host <br />
`python -m http.server 80` <br />

## Zadanie 2

First delete exisitng pod and run it again <br />
`kubectl delete pod first-pod` <br />

`kubectl logs first-pod` -> Basic logs <br />
`kubectl logs first-pod` -> more info about pod <br />

