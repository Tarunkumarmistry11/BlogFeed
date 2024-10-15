// backend/models/blogModel.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  media: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
