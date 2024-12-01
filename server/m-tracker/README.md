# Mental Tracker

## Background
Health related project that uses Spring Boot for server services

## Directory Structure
``` 
src/                  contains all source files 
    config/           contains application security configurations
    controller/       contains web controller classes
    dto/              contains files for requests 
    entity/           contains model classes
    exceptions/       contains files for exceptions 
    jwt/              contains jsonwebtoken files
    repository/       contains querys methods to interact with database
    service/          contains business logic between controller and repository
    util/             contains mapper config for conversion of DTO to entities

    resources/        contains sql database, application properties, and progress notes
```

## Installation
You can install the whole project using the following command
```
git clone https://github.com/c-lorenzo76/m-tracker.git
```

## Notes
You will have to manually create a database in MySQL or MariaDB and edit the file 'application.properties' with your database information:
```
spring.datasource.url=jdbc:mysql://localhost:3306/YOUR-DATABASE-NAME
spring.datasource.username=YOUR-USERNAME
spring.datasource.password=YOUR-PASSWORD
```