import gql from "graphql-tag";

export const EDIT_BOOK = gql`
  mutation EditBook(
    $bookId: Int!
    $title: String!
    $author: String!
    $price: Float!
  ) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      title
      author
      bookId
      price
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      title
      author
      bookId
      price
    }
  }
`;
