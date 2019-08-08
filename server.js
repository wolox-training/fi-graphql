const { ApolloServer } = require('apollo-server'),
  config = require('./config'),
  migrationsManager = require('./migrations'),
  logger = require('./app/logger'),
  schema = require('./app/graphql'),
  { getUser } = require('./app/graphql/users/resolvers');

const port = config.common.api.port || 8080;

migrationsManager
  .check()
  .then(() =>
    /* const rollbar = new Rollbar({
      accessToken: config.common.rollbar.accessToken,
      enabled: !!config.common.rollbar.accessToken,
      environment: config.common.rollbar.environment || config.environment
    }); */
    new ApolloServer({
      schema,
      formatError: err =>
        err.extensions.exception.invalidFields
          ? err.extensions.exception.invalidFields
          : { message: err.message, statusCode: err.extensions.code },
      context: ({ req }) => {
        const token = req.headers.authorization || '';
        const user = getUser(token);
        return { user };
      }
    })
      .listen(port)
      .then(({ url, subscriptionsUrl }) => {
        logger.info(`🚀 Server ready at ${url}`);
        logger.info(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
      })
  )
  .catch(logger.error);
