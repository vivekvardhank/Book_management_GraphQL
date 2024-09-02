const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  content: { type: String, required: true },
  rating: { type: Number },
  book: { type: Schema.Types.ObjectId, ref: 'Book' }
});

module.exports = mongoose.model('Review', ReviewSchema);
