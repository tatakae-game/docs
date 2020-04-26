# Security algorithm
Today's needs about security became one of the major aspect of any modern software. One of the most critical part of a software is authentication, it's the only barrier between a user's identity and the software.

## Tokens
A way and also our chosen solution is the use of tokens to authenticate the users. Once the user's credentials are sent to the server, a token is sent back.

One of the most known token solution being JSON Web Token (JWT). We could use JWT but we decided to create our own algorithm.

## Saving the tokens
Modern browsers has somthing called `Local Storage`, it's baically a database which is not sent automatically to the server like cookies does. This let us manage the token's transmission as we like.

To kind of "hide" the session's data to the user, it's transformed to Base64.
