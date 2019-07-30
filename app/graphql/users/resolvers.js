const { user: User } = require('../../models'),
  apiErrors = require('../../errors'),
  logger = require('../../logger');

exports.createUser = ({ email, password }) => {
  logger.info(`Trying to create user with email ${email}`);
  return User.createModel({ email, password }).catch(() => {
    throw apiErrors.badRequest('The user already exists');
  });
};

exports.login = ({ email, password }) => {
  logger.info(`Login for user ${email}`);
  return User.findOne({ where: { email } }).then(user => {
    if (!user) {
      throw apiErrors.forbidden('The user does not exists');
    }
    if (user.password !== password) {
      throw apiErrors.forbidden('The passwords do not match');
    }
    return { accessToken: 34343428403 };
  });
};
