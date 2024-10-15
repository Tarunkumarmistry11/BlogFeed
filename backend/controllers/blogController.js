// backend/controllers/blogController.js
const Blog = require('../models/blogModel');

// Create a new blog
exports.createBlog = async (req, res) => {
  const { title, content, media } = req.body;
  const location = req.ip; // Get user location based on IP address

  try {
    const blog = await Blog.create({
      title,
      content,
      media,
      location,
      user: req.user.id,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get blogs based on geo-location
exports.getBlogsByLocation = async (req, res) => {
  const location = req.ip;
  
  try {
    const blogs = await Blog.find({ location });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
