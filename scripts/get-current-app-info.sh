#!/bin/bash

export APP=$(awk -F'"' '/"name": ".+"/{ print $4; exit; }' package.json)
export VERSION=$(awk -F'"' '/"version": ".+"/{ print $4; exit; }' package.json)