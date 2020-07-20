## Robot Algorithm ## 

### Libraries ###

Robot lays on several libraries. 

One of the most used is `Wandbox-api`. This api allows use to execute JS code in an encapsulated environment.

The `SAN` alternative is san-playground, where we execute san code in a specific environnment.

## Usages ##

The robot works the same way in san and in js.

## Generation ##

The first event on game execution is generation.

Depending of languages, runners (js runners or san runners) are generated, with a map. Robots are randomly displayed on this one and emitted to client.

Then, user code is encapsulated in js context or san context. 

### Input ###

The input is fluctuent and contains robot, opponent and map. Those are the pillars of the running application.

### Code ###

The user code is fetched then modified to be executed in our specific context.

## Emission ##

To understand the robot logic, we need to know that Emission is one of the most central step in the `robot flow`. Every time a round end, en emission is sent to client in order to display modifications. Those emission and exchanges are handled by `web sockets`.

## Routine ##

During the code execution, a whole set of actions are generated and stocked, in order to be emitted to front, and interpreted in back to modify next input.

Those actions allows jsrunner and sanrunner to communicate, even if both are different languages.

## Adaptation

At the end of every turn, robots are modified by generated actions. They lose hps, mooves and die depending of those actions.

## End 

At the end, the winners are the one still alive. those earns some points.