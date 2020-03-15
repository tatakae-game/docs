# **TATAKAE-ADMIN** 

## Presentation
**The java part of Tatakae** (called 'Tatakae-admin' until the end of the present documentation) rests on Maven and will offer most of our administrative features. Somes of the those features will be implemented as dependecies, preventing the whole application from being too heavy to handle, and organising code in a readable way. As the application is supposed to be heavy, this specification sounded like the best architecture.
## Rights
As the application is intended for specific behaviour, only some users (called 'admin' for the rest of the present documentation) will be able to access it, in order to manage users, games and ranking. 
Those access may remain our own priviliges, depending of how the application will earn in popularity.

## Tickets management
The most intricate part is situated in the Technical support, handlded through tickets, those ones written by users. This feature shall entail usage of sockets, for dynamic tickets refresh and notification on answers. This way, administrative tasks must be a lot more flawless.

Those tickets will be drafted by regular users, directly on the dedicated interface, on tatakae-client, the Angular application.

## Game review

Another dependency shall allow admin to run through games to provide assistance on tickets, and notice possible bug and cheating. A step-by-step presentation of the game will be a necessity in user assistance and functionnality enchancement.
JFX isn't user-friendly, and exporting the whole Angular interface would be a difficult task. Consequently, this interface will be text only, in a matter of clarity and fast processing.

## Automatic Error elevation
When error occures on tatakae-client or tatakae-api, those errors shall be sent to tatakae-admin for a review. Those may 
