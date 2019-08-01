const { gql } = require('apollo-server'),
  { createUser, login } = require('./resolvers');

module.exports = {
  mutations: {
    createUser: (_, { user }) => createUser(user),
    logIn: (_, { credentials }) => login(credentials)
  },
  schema: gql`
    extend type Mutation {
      createUser(user: UserInput!): User!
      logIn(credentials: LoginInput!): AccessToken!
    }
  `
};
