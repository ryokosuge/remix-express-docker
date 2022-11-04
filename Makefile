.PHONY: all install build dev frontend/%

all: install dev

install: web/install

build: web/build

dev: build
	docker compose -f docker-compose.dev.yaml up --build

test: web/test

lint: web/lint

.PHONY: web/%
web/%:
	$(MAKE) -C web $*
