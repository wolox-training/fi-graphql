const { user: User } = require('../../models'),
  logger = require('../../logger');

exports.createUser = ({ email, password, name, lastName }) => {
  try {
    logger.info(`Trying to create user with email ${email}`);
    let error = {};
    if (password.length < 8) {
      error = {
        message: 'Password shoud be greater than 8 characters'
      };
      throw error;
    } else if (!/[A-Za-z0-9]/.test(password)) {
      error = { message: 'The password should contain only numbers and letters' };
      throw error;
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(email)) {
      error = { message: 'It should be a valid email' };
      throw error;
    } else if (email.indexOf('@wolox') === -1) {
      error = { message: 'The email shoud be @wolox' };
      throw error;
    } else {
      return User.findOne({ where: { email } }).then(existingUser => {
        if (existingUser) {
          error = { message: 'The user already exists' };
          throw error;
        }
        return User.createModel({ email, password, name, lastName });
      });
    }
  } catch (error) {
    logger.error(`Failed to create user. Error: ${error.message}`);
    throw error;
  }
};
