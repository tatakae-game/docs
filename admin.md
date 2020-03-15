# Administration software
This Java software rests on Maven and will offer most of our administrative features. Some of those features will be implemented as dependencies, giving a modular solution that can be scalable with ease, and will allow to have a readable code base. As the application is supposed to be heavy, this specification sounded like the best architecture.

# Permissions
As the application is intended for specific behaviour, only some users (called `admin` for the rest of the documentation) will be able to access it, in order to manage other users, games and ranking.
Those access may remain our own priviliges, depending on how the application will earn in popularity.

# Tickets management
The most intricate part is situated in the technical support, handlded through tickets written by users. This feature shall entail usage of sockets, for dynamic tickets refreshing and notification on answers. This way, administrative tasks should be a lot more flawless.

Those tickets will be drafted by regular users, directly on the dedicated web interface.

# Plugins
## Game review
Another dependency shall allow admins to run through games actions to provide assistance on tickets and notice possible bug(s) and abuses. A step-by-step presentation of the game will be a necessity in user assistance and functionnality enchancement.
JFX isn't user-friendly and exporting the whole web interface would be a tedious task. Consequently, this interface will be text only, in a matter of clarity and fast processing.

## Automatic Error elevation
When an error occures on the API, those errors shall be fetch by the administration software for review.

## Excel Exporter
Some information may needs to be exported in order to be used by Data Scientists as data sources. This plugin will allow admins to export data as *Comma-Separated Values* (CSV) files.
