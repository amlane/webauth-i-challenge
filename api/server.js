const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

const sessionConfig = {
  name: "strawberry",
  secret: "keep your secret safe",
  resave: false, // if no changes to the session do not save again
  saveUninitialized: true, // for GDPR compliance
  cookie: {
    maxAge: 1000 * 60, // one minute
    secure: false, //true in production
    httpOnly: true, //always set to true for security
  },
  store: new KnexSessionStore({
    knex: require('../database/dbConfig.js'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 30
  })
};

server.use(helmet());   // protects your headers
server.use(express.json());  // makes put and post work by passing info as json
server.use(cors());  // connect your react app with CORS middleware
server.use(session(sessionConfig)); // use express session and sessionConfig object
server.use('/api/users', usersRouter);  
server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
  res.send("It's alive!");
});


module.exports = server;