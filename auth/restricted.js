const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = function restricted(req, res, next) {
  if (req.session && req.session.username){
    next();
  } else {
    res.status(401).json({ message: "You shall not pass, restricted middleware! MUHAHAHA!" })
  }
};