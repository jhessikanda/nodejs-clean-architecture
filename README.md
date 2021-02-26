# nodejs-clean-architecture

A Clean Architecture Project in NodeJS

## Folder Structure

```
└ application → Application services layer
└ use_cases → Application business rules
└ domain → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
└ infrastructure → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
└ config → Application configuration files, modules and services
└ database → Database ORMs middleware
└ schemas → Mongoose schemas
└ repositories → Implementation of domain repository interfaces
└ webserver → Restify Web server configuration (server, routes, plugins, etc.)
└ server.js → Restify server definition
└ ports/http → Adapters and formatters for use cases and entities to external agency such as Database or the Web
└ UserController.js → Restify route handlers
└ routes.js → Restify route definitions
└ errors.js → Standard errors for the whole application
└ index.js → Main application entry point
```

## Clean Architecture

The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

![alt text](https://github.com/jhessikanda/nodejs-clean-architecture/blob/main/clean.jpeg)
