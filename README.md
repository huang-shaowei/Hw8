# Hw8
This is a simple Hello World Node.js application with current date and time.
# server.js Script
var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
# Dockerfile Script
FROM node:6.9.2
EXPOSE 8080
COPY server.js .
CMD node server.js
# Required Steps 
$ gcloud auth list

$ gcloud config list project

$ gcloud config set compute/zone us-central1-f

$ nano server.js

var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);

$ node server.js

$ nano Dockerfile

FROM node:6.9.2
EXPOSE 8080
COPY server.js
CMD node server.js

$ docker build -t gcr.io/chrome-courage-155503/hello-node:v1 .

$ docker run -d -p 8080:8080 gcr.io/chrome-courage-155503/hello-node:v1

$ curl http://localhost:8080

$ docker ps

$ docker stop a3168d1fbeb1

$ gcloud docker -- push gcr.io/chrome-courage-155503/hello-node:v1

$ gcloud config set project chrome-courage-155503

$ gcloud container clusters create hello-world \
--num-nodes 2 \
--machine-type n1-standard-1 \
--zone us-central1-f

$ gcloud container clusters create hello-world                 
--num-nodes 2                 
--machine-type n1-standard-1                 
--zone us-central1-f

$ kubectl run hello-node \
--image=gcr.io/chrome-courage-155503/hello-node:v1 \
--port=8080

$ kubectl get deployments

$ kubectl get pods

$ kubectl cluster-info

$ kubectl expose deployment hello-node --type="LoadBalancer"

$ kubectl get services



