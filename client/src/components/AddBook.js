import React,{useState} from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import {GET_AUTHORS, ADD_BOOK, GET_BOOKS} from '../queries/queries';







export default function AddBook() {

  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')

  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook, { data1, loading1, error1 }] = useMutation(ADD_BOOK, {
    refetchQueries: [{query: GET_BOOKS}],
  });

  console.log(data1)
  if (loading1) return 'Submitting...';
  if (error1) return `Submission error! ${error1.message}`;


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const dataArr = data.authors;


  const displayAuthors = dataArr.map(author => {
    return (
      <option key={author.id} value={author.id}>{author.name}</option>
    )
  })

  const submitForm = (e) => {
    e.preventDefault()
    const data = { name, genre, authorId }
    console.log(data)
    addBook({ variables: { name, genre, authorId } })


    setName("")
    setGenre("")
    setAuthorId("")
  }




  return (

    <form onSubmit={submitForm} style={{ marginTop: '40px' }}>

      <div className="field">
        <label>Book name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {displayAuthors}
        </select>
      </div>

       <button>+</button>
     </form>

  )
}


