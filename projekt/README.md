# Projekt

## Ingress
Uruchomienie kontrolera nginx ingress: <br /> 
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml`

## Frontend - React app
Zbudowanie obrazu dla apliakcji (w folderze app): <br /> 
`docker build -t app-react:production -f .\Dockerfile .` <br /> 

### Liczba replik: 2
Zapasowa instancja app w razie wystopięnia błędu i chwilowego zatrzymania jednej z replik
### Funkcjonalność
Strona internetowa z formularzem. <br /> 
Wejście: Liczba całkowita <br /> 
Wyjście: Lista dodatnich dzielników niewłaściwych (z liczbą wejściową) <br /> 

## Backend - api
Zbudowanie obrazu dla apliakcji (w folderze api): <br /> 
`docker build -t api:production -f .\Dockerfile .` <br />

### Liczba replik: 2
Zapasowa instancja api w razie wystopięnia błędu i chwilowego zatrzymania jednej z replik
### Funkcjonalność
Dwa ednpointy:
  - get: /dividers -> zwraca listę wszystkich wyników z bazy mongodb
  - post: /dividers -> oblicza lub zwraca z cache (redis) listę dzielników oraz zapisuje do baz wynik


## Zastosowanie wszystkich plików konfiguracyjnych
W folderze głównym: <br />
`kubectl apply -f .` <br />
