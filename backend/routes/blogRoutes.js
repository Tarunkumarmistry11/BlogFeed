// backend/routes/blogRoutes.js
const express = require('express');
const { createBlog, getBlogsByLocation } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create Blog (Protected Route)
router.post('/create', protect, createBlog);

// Get Blogs Based on Location
router.get('/location', getBlogsByLocation);

module.exports = router;
