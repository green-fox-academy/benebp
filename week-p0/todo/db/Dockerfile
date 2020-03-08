FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD password  
ENV MYSQL_DATABASE todo  
ENV MYSQL_USER root  
ENV MYSQL_PASSWORD password

ADD todo.sql /docker-entrypoint-initdb.d

# DB_HOST=localhost
# TODO_PORT="3306"
# DB_DB=todo
# DB_USER=root
# DB_PW=password