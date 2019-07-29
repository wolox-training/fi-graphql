const responseErrors = require('../../errors');
exports.createUser = (resolve, root, args) => {
  const { email, password } = args.user;
  const errors = [];
  if (password.length < 8) {
    errors.push({
      field: 'password',
      message: 'Password shoud be greater than 8 characters',
      statusCode: 422
    });
  } else if (!/[A-Za-z0-9]/.test(password)) {
    errors.push({
      field: 'password',
      message: 'The password should contain only numbers and letters',
      statusCode: 422
    });
  } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(email)) {
    errors.push({ field: 'email', message: 'It should be a valid email', statusCode: 422 });
  } else if (email.indexOf('@wolox') === -1) {
    errors.push({ field: 'email', message: 'The email shoud be @wolox', statusCode: 422 });
  }
  if (errors.length) {
    throw responseErrors.invalidInputError('Invalid input values', errors);
  }
  return resolve(root, args);
};
