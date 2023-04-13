#!/bin/bash

if [ -z ${VERSION} ] || [ -z ${APP} ]; then 
  source scripts/get-current-app-info.sh
fi

echo "==== Build docker image ${APP}:${VERSION} ===="
docker build -t ${APP}:${VERSION} .