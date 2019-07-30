const { gql } = require('apollo-server'),
  { createUser, login } = require('./resolvers');

module.exports = {
  mutations: {
    createUser: (_, { user }) => createUser(user),
    login: (_, { credentials }) => login(credentials)
  },
  schema: gql`
    extend type Mutation {
      createUser(user: UserInput!): User!
      login(credentials: LoginInput!): AccessToken!
    }
  `
};
