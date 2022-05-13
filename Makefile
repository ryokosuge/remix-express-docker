.PHONY: all install build dev frontend/%

all: install dev

install: frontend/install

build: frontend/build

dev: build
	cd frontend && \
		npm run build
	docker compose -f docker-compose.dev.yaml up --build

frontend/%:
	$(MAKE) -C frontend $*
