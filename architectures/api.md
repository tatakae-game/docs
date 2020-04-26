# API Architecture
## Choice and description
The Tatakae API has first been though as a light, sober and developper-friendly api, in order to form and help all of the developping team members to work on it at his own speed and competences. It follows some norms that allow the developpers to communicate throught clean-code pattern, but is limited by the language selection (Javascript) as its untyped system prevent some pattern usages. 

## Language
The selected language is NodeJS, running on BabelJS.

## Architecture
Tatakae REST API does follow a standard construction. Most of its processing happens in its endpoint and calls different models. Those models contains called objet structure, and most of its awaited functionality.
For exemple, user.js in the models directory contains the get_user_by_token function, allowing to fetch by its token the user.

### The tatakae tree structure
```
tatakae-api  
├── src   
│   ├── constants  
│   │   └── ...  
│   ├── middleware  
│   │   └── ...  
│   ├── models  
│   │   └── ...  
│   ├── routes  
│   │   └── ...  
│   ├── services  
│   │   └── ...  
│   ├──socket-endpoints  
│   │   └── ...  
│   ├── socket-middlwares  
│   │   └── ...  
│   ├── utils  
│   │   └── ...
│   └── ...  
└── test
    └── ...
```

## Constants
This contains the different constants every part needs to work consistently. For example, the constats/game.js contains the type of tiles for the game field, the maximum size the map may be, etc etc...

## Middleware
This specific directory contains all the middleware the endpoint may work with. Most of it are used to fill the request before it lands an endpoint, in order to fetch requesting user information.

## Models 
It contains all the models the API work with.

## Routes
This folder contains only the endpoints, categorized by name. The 'user.js' file contains all the request a user may do on the User model.

## Services
Services are exportated functions way too heavy to stand in their own environnment. This allows us to cut processing in multiple stand alone functions, that may be tested one by one.

## socket-endpoints
Contains all the socket endpoints used to create a constant connection with the web client. Those endpoints works as client-api constant connection delivering data on specific triggers.

## socket-middlwares 
Equivalent of the routes-middleware directory, but dedicated to socket functionnalities.

## Utils
Those are some Jake-of-all-trades Assets, like error management, etc...

## Used libraries
### Babel
Babel is a "toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments" as the website of the tool say itself, meaning the produced code will first be compiled and transformed in an environnement-friendly code, able to be runned on any brower. The choice of this technology has been made to allow any browser on any OS to turn Tatakae API, as the tools of our team wasn't the same. Moreover, some of the ECMAScript native functionnalities wasn't available in a Node native environnement. Babel allowed us to use those. 

### Wandbox
Wandbox is an online compiler, whose usage is to execute code in a contenerized environnment. As most of the user code may interract with our own system, we want Wandbox to execute it for us, in a totaly neutral environment. We only have to get its output as our own, sanitize it then send it to the client. 

