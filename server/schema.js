const { gql } = require("apollo-server");

const typeDefs = gql`
  # Movie schema
  type Movie {
    imdbID: String
    Title: String
    Poster: String
    Year: String
    Type: String
  }
  # Queries
  type Query {
    movies(title: String!, number:Int!): [Movie]
  }
`;

module.exports = typeDefs;
