const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const restricted = require('./restricted.js');


router.post('/register', (req, res) => {
    let user = req.body;
    //hash the password
    const hash = bcrypt.hashSync(user.password, 14); //password gets hashed 2 ^ 14 times
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post('/login', restricted, (req, res) => {
    let { username, password } = req.body;
   
    Users.findBy({ username })
      .first()
      .then(user => {
          if (user) {
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'You shall not pass!' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;