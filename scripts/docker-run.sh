
#!/bin/bash

PORT="${1:-3000}"

source scripts/get-current-app-info.sh

echo "==== Trying to start dockerized app ${APP}:${VERSION} on port ${PORT} ===="

source scripts/docker-remove-old.sh

if [[ -z "$(docker images -q ${APP}:${VERSION})" ]]; then
  source scripts/docker-build.sh
fi

docker run --name ${APP} -d -p ${PORT}:8080 ${APP}:${VERSION} && echo "==== Started dockerized app ${APP}:${VERSION} on port ${PORT} ====" || echo "==== Failto start dockerized app ${APP}:${VERSION} on port ${PORT} ===="