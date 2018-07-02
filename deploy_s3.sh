#!/bin/bash

mkdir deploy
zip -r deploy/empty-lambda.zip index.js node_modules/
