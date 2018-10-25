
build:
	docker-compose build

up:
	make build
	docker-compose up

down:
	docker-compose down

clean:
	- docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
