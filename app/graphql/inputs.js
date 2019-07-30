const { gql } = require('apollo-server');

module.exports = gql`
  input UserInput {
    firstName: String @deprecated(reason: "Deprecated field.")
    name: String @deprecated(reason: "Deprecated field.")
    lastName: String @deprecated(reason: "Deprecated field.")
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;
