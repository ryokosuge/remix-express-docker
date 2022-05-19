.PHONY: all install build dev frontend/%

all: install dev

install: frontend/install

build: frontend/build

dev: build
	docker compose -f docker-compose.dev.yaml up --build

test: frontend/test

lint: frontend/lint

frontend/%:
	$(MAKE) -C frontend $*
