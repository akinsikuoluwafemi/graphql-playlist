import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_BOOKS} from '../queries/queries';




export default function BookList() {

  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const dataArr = data.books;

  const displayBooks = () => {
    return (
      dataArr.map(book => (
          <li  key={book.id}>Name: {book.name}</li>
        ))
    )
  }

  return (
    <div  id="book-list">
      <h1>Ninja's Reading List</h1>
        {displayBooks()}
      </div>
  )
}
