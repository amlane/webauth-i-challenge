const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted.js');
  
  router.get('/', (req, res) => {  //need to add restricted back once tokens are added
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  
module.exports = router;