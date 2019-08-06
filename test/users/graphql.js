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

const logIn = credentials => ({
  mutation: gql`
    mutation logIn($credentials: LoginInput!) {
      logIn(credentials: $credentials) {
        accessToken
      }
    }
  `,
  variables: { credentials }
});

module.exports = { getUser, getUsers, createUser, logIn };
