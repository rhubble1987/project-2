# Movie Chat (working title)

## MVP:

Users can create a viewing of a movie and each viewing creates an instant chat thread for users to engage and disucss the movie while watching it. 

## Potential features:
* Users build their own watch lists
* Each movie has its own conversation
* Users can specify date/times when they'll watch a movie so that others can join them?
* Top movies listed on the main page

## HTML Routes

Index page
* List of movies that can have a viewing

Movie page
* List of created viewings and where a user can create a viewing

Viewings page
* Specific instance of a viewing for a movie

## Schema

Viewings
* ID
* OMDB Movie ID
* Viewing date
* Viewing time
* Channel ID
* Chat log
* Number of viewers

Chats
* ID
* Viewing ID
* Created date and time
* Chat content

Viewings and Chats relationship is one to many, and deleting a viewing would cascade down to related chats.


## Third-party APIs
* OMDB API to retrieve movie info

## Libraries
* Sequelize
* Express-Handlebars
* Socket.io - new library
* Bootstrap
* Express

