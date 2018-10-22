
build:
	docker-compose build

up:
	make build
	docker-compose up

down:
	docker-compose down
