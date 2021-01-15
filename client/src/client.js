import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";

const link = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_URI}`,
});
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});