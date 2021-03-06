const { factory } = require('factory-girl'),
  faker = require('faker'),
  models = require('../../app/models'),
  { user: User } = models;

factory.define('user', User, {
  email: () => faker.internet.email('loretta', 'martin', 'wolox.com'),
  password: () => faker.internet.password()
});

module.exports = {
  create: params => factory.create('user', params),
  createMany: () => factory.createMany('user', 5),
  build: params => factory.build('user', params),
  attributes: params => factory.attrs('user', params)
};
