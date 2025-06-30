const express = require('express');
const router = express.Router();
const { generateAIResponse, getChatHistory } = require('../controllers/aiController');
const { authenticateToken } = require('../middleware/auth');

// Generate AI response
router.post('/generate', authenticateToken, generateAIResponse);

// Get chat history
router.get('/history', authenticateToken, getChatHistory);

module.exports = router; 