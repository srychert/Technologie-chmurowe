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
`kubectl describe first-pod` -> more info about pod <br />

## Zadanie 3

`kubectl apply -f .\first-service.yaml` <br />
`kubectl get pod -o wide` <br />
`kubectl get services` <br />
`kubectl describe service first-service` <br />

- `ClusterIP`: Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default ServiceType.

- `NodePort`: Exposes the Service on each Node's IP at a static port (the NodePort). A ClusterIP Service, to which the NodePort Service routes, is automatically created. You'll be able to contact the NodePort Service, from outside the cluster, by requesting `<NodeIP>:<NodePort>`.
