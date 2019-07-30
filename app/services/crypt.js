const bcrypt = require('bcrypt'),
  config = require('../../config');

exports.encrypt = password => bcrypt.hash(password, config.common.salt, (err, hash) => hash);
