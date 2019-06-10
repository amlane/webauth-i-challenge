const express = require('express');

const router = express.Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted.js');
  
  router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  
module.exports = router;