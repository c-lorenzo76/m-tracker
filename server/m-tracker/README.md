# Mental Tracker

## Background
Health related project that uses Spring Boot for server services

## Directory Structure
``` 
src/                                contains all source files
    main/
        java/backend/mtracker 
            config/                 contains application security configurations
            controller/             contains web controller classes
            dto/                    contains files for requests 
            entity/                 contains model classes
            exceptions/             contains files for exceptions 
            jwt/                    contains jsonwebtoken files
            repository/             contains querys methods to interact with database
            service/                contains business logic between controller and repository
            util/                   contains mapper config for conversion of DTO to entities
        resources/                  contains sql database, application properties, and progress notes
```

## Installation
You can install the whole project using the following command
```
git clone https://github.com/c-lorenzo76/m-tracker.git
```

## Notes
View the directory structure as you will have to create a directory, 'resources/', within the '/src/main'. Then create an 
'application.properties' file that contains the following information. You will also have to create a database using MariaDB or MySQL. 
```
spring.application.name=m-tracker
spring.datasource.url=jdbc:mysql://localhost:3306/YOUR-DATABASE_NAME
spring.datasource.username=YOUR-USERNAME
spring.datasource.password=YOUR-PASSWORD

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true

sping.app.jwtSecret=YOUR-SECRET-KEY
spring.app.jwtExpiration=EXPIRATION-TIME

logging.level.org.springframework=DEBUG
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.springframework.security=DEBUG
logging.level.com.example.securitydemo=DEBUG
```