# SAN Playground API - Technical
The playground is made with `NodeJS`, routing with `Express` and body data validation with `Joi`.

Because user arbitrary code will be executed directly, the service is dockerized and a specific user is created to ensure security of the system it's executed on.

It uses the `child_process` Node native module to start commands with a timeout of 25 seconds and some other useful options it needs.
