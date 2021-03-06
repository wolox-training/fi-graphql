const bcrypt = require('bcryptjs');

exports.encrypt = password => bcrypt.hash(password, 10);

exports.compare = (hashedPassword, password) => bcrypt.compare(password, hashedPassword);
