const { gql } = require('apollo-server'),
  { album, albums } = require('./resolvers');

module.exports = {
  queries: {
    album: (_, params) => album(params.id),
    albums: (_, params) => albums(params)
  },
  schema: gql`
    extend type Query {
      album(id: ID): Album!
      albums(offset: Int, limit: Int, orderBy: String) [Album]
    }
  `
};
