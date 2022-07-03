import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export const CHARS_DATA = gql`
  query {
    characters {
      results {
        id
        name
        status
        gender
        image
      }
    }
  }
`;

export const FAV_CHARS = gql`
  query {
    charactersByIds(ids: [1, 2, 3, 4]) {
      id
      name
      status
      gender
      image
    }
  }
`;
