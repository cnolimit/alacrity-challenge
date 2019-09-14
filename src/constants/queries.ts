import { gql } from "apollo-boost";

export const GET_BOOKS = gql`
  {
    books {
      bookId
      title
      author
      price
    }
  }
`;
