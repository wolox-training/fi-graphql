const { gql } = require('apollo-server');

const getUser = id => gql`
    query {
        user(id: ${id}) {
          email
        }
      }`;

const getUsers = () => gql`
  query {
    users {
      email
    }
  }
`;

const createUser = userInput => ({
  mutation: gql`
    mutation createUser($userInput: UserInput!) {
      createUser(user: $userInput) {
        id
        password
        email
      }
    }
  `,
  variables: { userInput }
});

module.exports = { getUser, getUsers, createUser };
