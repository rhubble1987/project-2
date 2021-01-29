# Movie Chat (working title)

## MVP:

Users can pick movies they plan on watching and set a date and time they will watch a specific movie. From a movie's profile page, users can see dates and times when others are planning to watch the movie. Once that date and time occur, an instant chat conversation will be started and will allow users currently watching the movie to engage and discuss the movie.

## Potential features:
* Users build their own watch lists
* Each movie has its own conversation
* Users can specify date/times when they'll watch a movie so that others can join them?
* Top movies listed on the main page

## HTML Routes

Index page
* Contains user's selected movies and date and time slots for selected movies

Movie page
* Contains the conversations for a movie and times when others are watching the movie
* Could also contain additional movie info like ratings, reviews, etc.

## Schema

Movies Schema:
* ID
* IMDB id
* Chat log
* Number of users planning to watch
* Viewing dates and timeslots - new timeslots every 4 hours

Users schema:
* ID
* username
* password
* email
* Movies they are planning to watch (movie ID)
* User's chat log

## Third-party APIs
* OMDB API to retrieve movie info

## Libraries
* Sequelize
* Express-Handlebars
* Socket.io - new library
* Bootstrap
* Express

