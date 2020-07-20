# Api Documentation #

## Usage ##
Tatakae Api provide a whole set of routes to handle users, games, groups, chat messages, etc...

It does provide some socket endpoint too.

## Routes ##

### User ###

#### GET `/users/me` ####

##### Require #####

User to be loged

##### Result #####

Get the contacting user informations

-----

#### GET `/users` ####

##### Result #####

Get all users

Get all users

#### GET `/users/search` ####

Get user depending of the passed username by query

#### GET `/users/admins` ####

Get admins

#### GET `/users/code/js` ####

Get user js code

#### GET `/users/code/js` ####

Get user san code

#### GET `/users/:id` ####

Get user by passed id

#### PUT `/users/:id/code` ####

Modify user code

#### PUT `/user/password` ####

Modify user password

#### PUT `/user/language` ####

Modify user default language

#### PUT `/users/groups/:id` ####

Modify user groups belonging

---

### Auth ###

#### POST `auth/check` ####

Check if contacting user is authenticated

#### POST `/auth/register` ####

Register a user

#### POST `/auth/login` ####

Login user

----
### Chat ###

#### GET `/chat/rooms` ####

Get all rooms simple informations

#### GET `/chat/rooms/:room_id` ####

Get detailed information for a specific room

#### POST `/chat/rooms/:room_id/invite` ####

Invite a user to a specific room

#### POST `/chat/rooms` ####

Generate a room with passed parameters

---

### Games ###

#### GET `/games` ####

Get all games

#### GET `/games/disabled` ####

Get all disabled games (status = false)

#### GET `/games/user/:id` ####

Get user depending of the passed id

#### GET `/games/:id/winrate` ####

Get user win rate

#### PUT `/games/status` ####

Change game status

#### GET `/games/:id` ####

Get game by id

---

### Groups ###

#### GET `/groups` ####

Get all groups

#### GET `/groups/:group_id` ####

Get group by id

#### POST `/groups` ####

Create a group

#### GET `/permissions` ####

Get all permissions

---

### Support ###

#### GET `/support/user/tickets` ####

Get all tickets by specified user (in token)

#### GET `/support/tickets` ####

Get all tickets

#### GET `/support/admin/tickets/opened` ####

Get opened tickets

#### POST `/support/admin/tickets/closed` ####

Get all closed tickets

#### PUT `/support/tickets/:id/status` ####

Change ticket status

#### PUT `/support/tickets/:id/assign` ####

Assign ticket to a specific admin

---

## Sockets ##

Our web sockets allow dynamic data exchange between our clients.

### Room (chat) ###

#### Emissions ####
##### connection #####

* initialize handshake
* get room and user
* Wait for further emission

##### disconnect #####
* Close connection

##### message #####
* register message in DB
* broadcast it to all listening members of the room (checked by id)


### Game ###

#### Emissions ####
##### connection #####

* initialize handshake
* get user and opponent
* Generate world, robots, memory maps and runners
* Emit back game configuration for client to display ()

###### :Loop ###### 

* Execute code in runner own context
* Fetch generated actions
* Emit new actions
* register actions for further game displaying
* Load context with actions, and modify robots

###### :end ###### 
