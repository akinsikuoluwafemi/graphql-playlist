const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// connect to mongodb database
mongoose.connect("mongodb+srv://femi:november14@cluster0.3fi4o.mongodb.net/libraryapp?retryWrites=true&w=majority")

mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use(cors()) // not having cors enabled will cause an access control error

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(5000, () => {
  console.log('now listening on port 5000');
});
