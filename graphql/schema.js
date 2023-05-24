const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    register(input: RegisterInput!): User!
  }
`;

module.exports = typeDefs;
