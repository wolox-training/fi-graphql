const { makeExecutableSchema } = require('graphql-tools'),
  { applyMiddleware } = require('graphql-middleware'),
  types = require('./types'),
  inputs = require('./inputs'),
  users = require('./users'),
  albums = require('./albums'),
  healthCheck = require('./healthCheck');

const typeDefs = [types, inputs, ...users.schemas, ...healthCheck.schemas, ...albums.schemas];

module.exports = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers: {
      Query: {
        ...users.queries,
        ...healthCheck.queries,
        ...albums.queries
      },
      Mutation: {
        ...users.mutations
      },
      Subscription: {
        ...users.subscriptions
      }
    }
  }),
  {
    Mutation: {
      ...users.middlewares
    }
  }
);
