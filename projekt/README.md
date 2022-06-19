# Projekt

## Ingress
Uruchomienie kontrolera nginx ingress: <br /> 
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml`

## Frontend - React app
Zbudowanie obrazu dla apliakcji (w folderze app): <br /> 
`docker build -t app-react:production -f .\Dockerfile .` <br /> 

## Backend - api
Zbudowanie obrazu dla apliakcji (w folderze api): <br /> 
`docker build -t api:production -f .\Dockerfile .` <br />

## Zastosowanie wszystkich plików konfiguracyjnych
W folderze głównym: <br />
`kubectl apply -f .` <br />
