const bcrypt = require('bcrypt'),
  config = require('../../config');

exports.encrypt = password => bcrypt.hash(password, config.common.salt, (err, hash) => hash);

exports.compare = (password, hashedPassword) => bcrypt.compare(password, hashedPassword, (err, res) => res);
