const { gql } = require('apollo-server');

module.exports = gql`
  input UserInput {
    firstName: String @deprecated(reason: "Use name field.")
    name: String!
    lastName: String!
    email: String!
    password: String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
`;
