const { queries, schema: queriesSchema } = require('./queries'),
  { mutations, schema: mutationSchema } = require('./mutations'),
  middlewares = require('./middlewares'),
  { subscriptions, schema: subscriptionsSchema } = require('./subscriptions');

module.exports = {
  queries,
  mutations,
  subscriptions,
  middlewares,
  schemas: [queriesSchema, mutationSchema, subscriptionsSchema]
};
