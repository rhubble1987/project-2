# Movie Chat

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

## Description
This repository contains a full stack web app That communicates with a database, and is designed around the Model,View, Controller philosophy. A user can organize view parties around certain movies, and chat with other viewers in view party room. This webapp uses socket.io to create a live chat room.

## Installation
Downloading respository. In directory run npm install. This program requires mysql.
Run schema.sql in mysql to create database.
Edit config file in way of choosing to tie database name, username and password of mysql.

## Usage
The application is deployed to https://dry-retreat-28043.herokuapp.com/.
Server can be run in test usage with node server.js command, or npm run start.

## Credits
Made By Andrew Ehrman.

### Components Used
Node

npm packages
mysql
express
express-handlebars
dotenv
eslint
socket.io
sequelize-cli