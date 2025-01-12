# Mental Tracker

## Background

Health related project that uses Spring Boot for server services and Angular for client services

## Directory Structure

```
client/                   contains all the files for the client side
    src/                  contains all source files
        app/              contains all files ie. components, services, pages, etc. 
            auth/         contains auth services for login, register, and logout
            components/   contains all components
            constants/    contains constants that are used in the app
            dtos/         contains interface for data transfer objects
            pages/        contains components that are the pages
            services/     contains all the requests to the server
        assets/           contains images and svgs

server/                   contains all the files for the server side
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

