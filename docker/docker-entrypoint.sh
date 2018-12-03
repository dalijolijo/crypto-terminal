#!/bin/bash
set -e

# Change IP Adresse^
DOCKER_IP=$(ip addr | grep 'global ens2' | xargs | cut -f2 -d ' ' | cut -f1 -d '/')
sed -i "s/DOCKER_IP/$DOCKER_IP/g" /crypto-terminal/docker/connect_docker.js
cp /crypto-terminal/docker/connect_docker.js /crypto-terminal/grunt/connect.js

cd crypto-terminal
npm install

exec gosu root "$@"
