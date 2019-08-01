const { gql } = require('apollo-server');

module.exports = gql`
  input UserInput {
    firstName: String
      @deprecated(reason: "Deprecated field, now the user no longer has firstName or lastName.")
    name: String @deprecated(reason: "Deprecated field, now the user no longer has firstName or lastName.")
    lastName: String
      @deprecated(reason: "Deprecated field, now the user no longer has firstName or lastName.")
    email: String!
    password: String!
  }
  input LoginInput {
    username: String!
    password: String!
  }
`;
