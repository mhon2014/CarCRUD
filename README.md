# Car Crud


### TODO
* Unit testing
* Security, Hash API Key / password
* Data validation?

### Instructions

##### Makefile instruction
```make
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
```

##### Getting started

- Clone the Repo

- Run 'make build' to build the images

- Run 'make start' to run the containers

- Use postman or any API testing platform to use CRUD operations

- Routes for API are 
```
 localhost:8000/api/v1/

 localhost:8000/api/v1/create

 localhost:8000/api/v1/get/:id

 localhost:8000/api/v1/getall

 localhost:8000/api/v1/update

 localhost:8000/api/v1/delete
 ```

 `Get` request are open to all with an API key while `create`, `update` and `delete` is only available with those with admin privileges.

 - `guestkey` is the API key for guest
 - `adminkey` is the API key for admin
