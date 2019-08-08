const { gql } = require('apollo-server'),
  { buyAlbum } = require('./resolvers');

module.exports = {
  mutations: {
    buyAlbum: (_, { albumId }, context) => buyAlbum(albumId, context.user)
  },
  schema: gql`
    extend type Mutation {
      buyAlbum(albumId: Int!): Album
    }
  `
};
