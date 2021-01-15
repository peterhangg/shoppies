const { gql } = require("apollo-server");

const typeDefs = gql`
  # Movie schema
  type Movie {
    id: ID!
    title: String
    poster: String
    year: String
  }
  # Queries
  type Query {
    movies(title: String!): [Movie]!
  }
`;

module.exports = typeDefs;
