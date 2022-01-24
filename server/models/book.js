const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String, // reference to author
});


module.exports = mongoose.model('Book', bookSchema);  // export the model