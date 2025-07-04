const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');
require('dotenv').config();
const { sendEmail, formatContactEmail } = require('./utils/emailHelper');

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://tax-consultant-website.vercel.app',
    process.env.FRONTEND_URL // For custom domain
  ].filter(Boolean), // Remove null/undefined values
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ai', aiRoutes);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate input
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields'
      });
    }

    // Format and send email
    const mailOptions = formatContactEmail(req.body);
    await sendEmail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

module.exports = app;
