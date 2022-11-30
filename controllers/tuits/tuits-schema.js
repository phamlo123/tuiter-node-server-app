import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes: Number,
  liked: Boolean,
  image: String,
  handle: String
}, {collection: 'tuits'});
export default schema;