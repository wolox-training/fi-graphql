const { gql } = require('apollo-server'),
  { buyAlbum } = require('./resolvers');

module.exports = {
  mutations: {
    buyAlbum: (_, { albumId }) => buyAlbum(albumId)
  },
  schema: gql`
    extend type Mutation {
      buyAlbum(albumId: Int!): Album
    }
  `
};
