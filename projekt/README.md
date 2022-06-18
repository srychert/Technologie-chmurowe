# Projekt

## Ingress
Uruchomienie kontrolera nginx ingress: <br /> 
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml`

Zastosowanie konfiguracji (folder główny):<br /> 
`kubectl apply -f .\Ingress.yaml `<br /> 

## Frontend - React app
Zbudowanie obrazu dla apliakcji (w folderze app): <br /> 
`docker build -t app-react:v0 -f .\Dockerfile .` <br /> 
Serwis i Deployment: <br /> 
`kubectl apply -f .\Service-app.yaml `<br /> 
`kubectl apply -f .\Deployment-app.yaml`<br />


## Backend - api
Zbudowanie obrazu dla apliakcji (w folderze api): <br /> 
`docker build -t api:v0 -f .\Dockerfile .` <br />
Serwis i Deployment: <br /> 
`kubectl apply -f .\Service-api.yaml` <br />
`kubectl apply -f .\Deploy-api.yaml ` <br />
