#!/bin/bash

if [ -z ${VERSION} ] || [ -z ${APP} ]; then 
  source scripts/get-current-app-info.sh
fi

echo "==== Remove old app container ${APP} ===="
docker rm -f ${APP}