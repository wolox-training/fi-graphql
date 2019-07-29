const { gql } = require('apollo-server');

module.exports = gql`
  directive @deprecated(reason: String = "No longer supported") on FIELD_DEFINITION | INPUT_FIELD_DEFINITION
  type Query
  type Mutation
  type Subscription
  type User {
    firstName: String @deprecated(reason: "Use name field.")
    name: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    id: ID!
  }
  type Album {
    title: String!
    artist: String
    photos: String
    id: ID!
  }
  type AccessToken {
    accessToken: String!
    refreshToken: String!
    expiresIn: Int!
  }
`;
