Movie Chat (working title)

MVP:

Users can pick movies they plan on watching and set a date and time they will watch it. From a movie's profile page, users can see dates and times when others are planning to watch the movie. Users can then use the instant chat feature for each movie to chat about the movie with those also watching it.

Potential features:
* Users build their own watch lists
* Each movie has its own conversation
* Users can specify date/times when they'll watch a movie so that others can join them?
* Top movies listed on the main page

Index page
* Contains users selected movies and other user data

Movie page
* Contains the conversations for a movie and times when others are watching the movie

Movies Schema:
* ID
* IMDB id
* Chat log
* Number of users planning to watch
* Viewing dates and timeslots

Users schema:
* ID
* username
* password
* email
* Movies they are planning to watch (movie ID)
* User's chat log

APIs
* OMDB API

Libraries
* Sequelize
* Express-Handlebars
* Socket.io - new library
* Bootstrap
* Express

