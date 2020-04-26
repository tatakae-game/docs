# Angular application

The frontend of Tatakae is developped with the framework Angular version 9.0.5

## Architecture

```
tatakae-client
├── e2e
├── node_modules
├── src
│   ├── app
│   │   ├── dashboard-admin
│   │   ├── game
│   │   ├── header
│   │   ├── models
│   │   ├── services
│   │   ├── user-control
│   │   ├── validators
│   │   ├── views
│   │   │   ├── editor
│   │   │   ├── home
│   │   │   ├── login
│   │   │   ├── not-found
│   │   │   ├── play
│   │   │   ├── room
│   │   │   ├── rooms
│   │   │   └── signup
│   │   └── app-routing.module.ts
│   ├── assets
│   └── environments
└── package.json
```

## Deltails

### package.json:

This is the configuration file of the application. It contains the list of all the dependencies needed, the name of the project, its version and more.

### e2e:

This directory is here to contain all about end to end tests.

### node_modules:

Created / Updated when running `npm install` or `npm i` command line. Contains all dependencies which are needed by the application. It takes the information from package.json file.

### src:

* **assets/**
    Contains all the ressources needed by the application like pictures, favicon, etc ..

* **environments/**
    Contains the configuration of the different environments.

### app:

* **dashboard-admin/**
    This component is the base of the admin area.

* **game/**
    This component has as purpose to display a graphical gameplay.

* **header/**
    This is the header of all the pages except admin ones.

* **models/**
    It contains all the models needed by the application.

* **services/**
    Regroups all the services which will be used inside other components.

* **user-control/**
    This component is the parent of all components used in the application except for admin section.

* **validators/**
    Contains all the validators used in reactive forms of the application.

* **views/**
    Contains all the components which have as purpose to be a page for the users.

* **app-routing.module.ts**
    This file manage the routing inside the application. It associates routes with components.
