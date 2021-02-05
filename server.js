const express = require('express');
const handlebars = require('express-handlebars');

// Sets up the Express App
const app = express();

//Allows io conenction
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path =require('path');



const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname,'/public')));

//Setup handlebars view engine
app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Connect Routes
const router = require('./controllers/api-routes');
const htmlRouter = require('./controllers/html-routes');
router(app);
htmlRouter(app);

//On a user connection log message in console.
io.on('connection', (socket) => {
  const room = socket.handshake.query.room;
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', msg => {
    console.log(msg);
    io.to(room).emit('chat message', msg);
  });

  socket.join(room);
});

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(() => {
  http.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
});

