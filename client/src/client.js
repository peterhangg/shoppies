import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";

const link = new HttpLink({ uri: "http://localhost:4000/" });
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});