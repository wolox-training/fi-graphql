const responseErrors = require('../../errors'),
  logger = require('../../logger');

exports.createUser = (resolve, root, args) => {
  const { email, password } = args.user;
  const errors = [];
  if (password.length < 8) {
    errors.push({
      field: 'password',
      message: 'Password shoud be greater than 8 characters',
      statusCode: 422
    });
  }

  if (!password || !email) {
    errors.push({
      message: `These params are required: ${['password', 'email', 'name', 'lastName']
        .filter(property => !args.user[property])
        .join(', ')}`,
      statusCode: 422
    });
  }

  if (!/[A-Za-z0-9]/.test(password)) {
    errors.push({
      field: 'password',
      message: 'The password should contain only numbers and letters',
      statusCode: 422
    });
  }

  if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(email)) {
    errors.push({ field: 'email', message: 'It should be a valid email', statusCode: 422 });
  }

  if (email.indexOf('@wolox') === -1) {
    errors.push({ field: 'email', message: 'The email shoud be @wolox', statusCode: 422 });
  }

  if (errors.length) {
    logger.info(`Invalid params for the user creation: ${JSON.stringify(args)}`);
    throw responseErrors.invalidInputError('Invalid input values', errors);
  }
  return resolve(root, args);
};

exports.buyAlbum = (resolve, root, args, context) =>
  context.user.then(user => {
    if (!user) {
      throw responseErrors.unauthorized('Unauthorized user');
    }
    return resolve(root, args, { user });
  });
