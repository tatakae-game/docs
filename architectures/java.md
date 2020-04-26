# Java application

The application uses Maven as package manager. This will provide a standard architecture like: 

```
project
└── src
    ├── main
    └── test
```

We kept the same architecture but adapted to a module scope since the application is running under Java 11.

## Base

The final architecture will finally look like:

```
tatakae-admin
├── cli
│   └── src
│       ├── main
│       └── test
├── core
│   └── src
│       ├── main
│       └── test
└── ui
    └── src
        ├── main
        └── test
```

## Modules

### cli:

The purpose of this module is to manage all inputs and outputs within the command line interface. For all logical calculs, it will use the `core module`.

### ui:

As `cli module`, this one is only here to manage the inputs and outputs but this time for the user interface. It will also use the `core module` to execute the logical calculs.

### core:

The most important module of this project. It is with this module that we can manage the logical part to finally share the information to the two other modules. If the demand is from command line interface then the result will be transfered to the `cli module`. Otherwise the result will be sent to the `ui module`.


## Tests

As shown upper, each module contains a test directory: `/test`. Those directories will contain all the *unit tests* to be sure our classes are stable and maintainable.