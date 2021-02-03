const express = require('express');
const handlebars = require('express-handlebars');

// Sets up the Express App
const app = express();

//Allows io conenction
const http = require('http').Server(app);
const io = require('socket.io')(http);



const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup handlebars view engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Connect Routes
const router = require('./controllers/partiesController');
router(app);

//On a user connection log message in console.
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});