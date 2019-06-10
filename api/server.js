const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
//import bcryptjs
const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');
// const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});


module.exports = server;