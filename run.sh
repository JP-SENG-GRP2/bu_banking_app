#!/bin/bash
docker compose down
docker build -t new_banking_app .
docker compose up & cd cicd && docker compose up