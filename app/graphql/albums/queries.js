const { gql } = require('apollo-server'),
  { album } = require('./resolvers');

module.exports = {
  queries: {
    album: (_, params) => album(params.id)
  },
  schema: gql`
    extend type Query {
      album(id: ID): Album!
    }
  `
};
