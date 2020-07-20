# Api Documentation #

## Usage ##
Tatakae Api provide a whole set of routes to handle users, games, groups, chat messages, etc...

It does provide some socket endpoint too.

## Routes ##

### User ###

---

#### GET `/users/me` ####

##### Require #####

User to be loged

##### Result #####

Get the contacting user informations

-----

#### GET `/users` ####

##### Result #####

Get all users

----

#### GET `/users/search` ####

##### Result #####

Get user depending of the passed username by query

----

#### GET `/users/admins` ####

##### Result #####

Get admins

----

#### GET `/users/code/js` ####


##### Require #####

User to be logged

##### Result #####

Get user js code

----

#### GET `/users/code/san` ####

##### Require #####

User to be logged

##### Result #####

Get user san code

---

#### GET `/users/:id` ####

##### Result #####

Get user by id


---

#### PUT `/users/:id/code` ####

##### Require #####
files: [File]

language: string

##### Result #####

Modify user code by language and files

---

#### PUT `/user/password` ####

##### Require #####

password: string

new_password: string

##### Result #####

Modify user password

--- 


#### PUT `/user/language` ####

#### Require ####

language: string

#### Result ####

Modify user default language

---- 
#### PUT `/users/groups/:id` ####

#### Require ####

groups: [string]

#### Result ####

Modify user groups belonging

---

### Auth ###

#### POST `auth/check` ####

#### Result ####

Check if contacting user is authenticated

---

#### POST `/auth/register` ####

##### Require #####

User not to be logged

username: string

email: string

password: string

#### Result ####
Register user

---

#### POST `/auth/login` ####

##### Require #####

User not to be logged

username: string

password: string

#### Result ####

Return a generated token

----
### Chat ###

#### GET `/chat/rooms` ####

#### Require

User to be logged

#### Result 

Get all rooms simple informations

----
#### GET `/chat/rooms/:room_id` ####

#### Require

User to be logged

#### Result 

Get detailed information for a specific room

----
#### POST `/chat/rooms/:room_id/invite` ####

#### Require

User to be logged

user: string

#### Result 

Invite a user to a specific room

----
#### POST `/chat/rooms` ####

#### Require

User to be logged

name: string

is_ticket = boolean

guest: string

#### Result 

Generate a room with passed parameters

---

### Games ###

#### GET `/games` ####

#### Result 

Get all games

#### GET `/games/disabled` ####

#### Result 

Get all disabled games (status = false)

-----

#### GET `/games/user/:id` ####

#### Result 

Get user depending of the passed id

----

#### GET `/games/:id/winrate` ####

#### Result 

Get user win rate

----
#### PUT `/games/status` ####

#### Require

Require user to be admin

status: Boolean

#### Result 

Change game status

----

#### GET `/games/:id` ####

#### Result 

Get game by id

---

### Groups ###

#### GET `/groups` ####

#### Result 

Get all groups

----

#### GET `/groups/:group_id` ####

#### Result 

Get group by id

#### POST `/groups` ####

#### Require

User to be admin

name:string

#### Result 

Create a group

#### GET `/permissions` ####

#### Result 

Get all permissions

---

### Support ###

#### GET `/support/user/tickets` ####

#### Result 

Get all tickets by specified user (in token)

-----
#### GET `/support/tickets` ####

#### Result 

Get all tickets

----
#### GET `/support/admin/tickets/opened` ####

#### Result 

Get opened tickets

----
#### POST `/support/admin/tickets/closed` ####

#### Result 

Get all closed tickets

-----
#### PUT `/support/tickets/:id/status` ####

#### Require

User to be logged

status: string

#### Result 

Change ticket status

-----
#### PUT `/support/tickets/:id/assign` ####

#### Require

User to be admin

user: string

#### Result

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
