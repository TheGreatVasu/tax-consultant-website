const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// API Configuration
export const API_KEYS = {
    // Gemini API Key for version 2.0-flash
    GEMINI_API_KEY: process.env.REACT_APP_GEMINI_API_KEY,
};

// API Endpoints
export const API_ENDPOINTS = {
    BASE_URL: API_URL,
    AI_CHAT: `${API_URL}/api/ai/chat`,
    CONTACT: `${API_URL}/api/contact`,
}; 