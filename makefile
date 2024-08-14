
start:
	docker-compose up -d
build:
	docker-compose build
stop:
	docker-compose stop
clean:
	docker-compose down --volumes
storage:
	docker-compose up -d database cache