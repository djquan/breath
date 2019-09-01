IMAGE := reg.quan.io/dan/breath
GITHUB_SHA ?= $(shell git rev-parse HEAD)

build:
	@docker build -t ${IMAGE}:latest -t ${IMAGE}:${GITHUB_SHA} .

push:
	@docker push ${IMAGE}:latest
	@docker push ${IMAGE}:${GITHUB_SHA}