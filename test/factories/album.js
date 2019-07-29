const { factory } = require('factory-girl'),
  faker = require('faker'),
  models = require('../../app/models'),
  { album: Album } = models;

factory.define('album', Album, {
  title: () => faker.name.firstName()
});

module.exports = {
  create: params => factory.create('album', params),
  createMany: () => factory.createMany('album', 5),
  build: params => factory.build('album', params),
  attributes: params => factory.attrs('album', params)
};
