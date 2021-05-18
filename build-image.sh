#! /bin/bash

export IMAGE=io.github.tpalucki/gramilka-frontend:0.0.3

docker rmi -f ${IMAGE}
docker build --rm -t ${IMAGE} .
docker image prune -f
