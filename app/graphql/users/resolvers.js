const { user: User } = require('../../models'),
  apiErrors = require('../../errors'),
  logger = require('../../logger');

exports.createUser = ({ email, password, name, lastName }) => {
  logger.info(`Trying to create user with email ${email}`);
  return User.createModel({ email, password, name, lastName }).catch(() => {
    throw apiErrors.badRequest('The user already exists');
  });
};
