const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  authors: [{ type: String}],
  description: {type:String},
  image: {type:String},
  link:{type:String},
  title:{type:String}
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;