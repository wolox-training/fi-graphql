const { ApolloError, UserInputError } = require('apollo-server');

const createError = (message, statusCode) => new ApolloError(message, statusCode);

const DEFAULT_ERROR = 500,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401;

exports.defaultError = message => createError(message, DEFAULT_ERROR);
exports.badRequest = message => createError(message, BAD_REQUEST);
exports.invalidInputError = (message, invalidFields) => new UserInputError(message, { invalidFields });
exports.forbidden = message => createError(message, FORBIDDEN);
exports.unauthorized = message => createError(message, UNAUTHORIZED);
