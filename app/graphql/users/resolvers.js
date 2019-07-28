const { user: User } = require('../../models'),
  logger = require('../../logger'),
  { badRequest } = require('../../errors');

exports.createUser = ({ email, password, name, lastName }) => {
  logger.info(`Trying to create user with email ${email}`);
  if (password.lenth < 8) {
    throw badRequest('Password shoud be greater than 8 characters');
  } else if (!/[A-Za-z0-9]/.test(password)) {
    throw badRequest('The password should contain only numbers and letters');
  } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(email)) {
    throw badRequest('It should be a valid email');
  } else if (email.indexOf('@wolox') === -1) {
    throw badRequest('The email shoud be @wolox');
  }
  return User.findOne({ where: { email } }).then(existingUser => {
    if (existingUser) {
      throw badRequest('The user already exists');
    }
    return User.createModel({ email, password, name, lastName });
  });
};
