import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query{
    books{
      name
      genre
      id
    }
  }
`

export const GET_AUTHORS = gql`
  query{
    authors{
    name
    age
    id
  }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook(
    $name: String!,
    $genre: String!,
    $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }

`;

// export const ADD_BOOK = gql`
//   mutation {
//     addBook(name: "Femi", genre: "Suspense", authorId: "61ed577223f14f3ea6db0f2d" ) {
//       name
//       genre
//       authorId
//     }
//   }

// `;

export const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $age: Int) {
    addAuthor(name: $name, age: $age){
      name
      age
    }
  }
`;