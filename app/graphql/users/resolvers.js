const { user: User } = require('../../models'),
  apiErrors = require('../../errors'),
  logger = require('../../logger'),
  { encrypt, compare } = require('../../services/crypt');

exports.createUser = ({ email, password }) => {
  logger.info(`Trying to create user with email ${email}`);

  return encrypt(password).then((hashedPassowrd, error) => {
    if (error) {
      logger.info(error);
      throw apiErrors.badRequest('There was an error processing the registration');
    }
    return User.createModel({ email, password: hashedPassowrd }).catch(() => {
      throw apiErrors.badRequest('The user already exists');
    });
  });
};

exports.login = ({ email, password }) => {
  logger.info(`Login for user ${email}`);
  return User.findOne({ where: { email } }).then(user => {
    if (!user) {
      throw apiErrors.forbidden('The user does not exists');
    }
    return compare(user.password, password).then(res => {
      if (!res) {
        throw apiErrors.forbidden('The passwords do not match');
      }
      return { accessToken: 34343428403 };
    });
  });
};
