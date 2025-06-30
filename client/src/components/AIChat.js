import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  IconButton,
  CircularProgress,
  Avatar,
  Fade,
  useTheme,
  Chip,
  Card,
  Stack,
  alpha,
  Tooltip,
  Zoom
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { API_KEYS } from '../config/api.config';

const SUGGESTED_QUESTIONS = [
  {
    title: "Tax Planning",
    emoji: "📊",
    question: "What are the best tax saving strategies for small businesses in 2024?"
  },
  {
    title: "GST Compliance",
    emoji: "📑",
    question: "Can you explain the latest GST filing requirements and deadlines?"
  },
  {
    title: "International Tax",
    emoji: "🌏",
    question: "How does double taxation avoidance work for international businesses?"
  },
  {
    title: "Business Advisory",
    emoji: "💼",
    question: "What financial metrics should I monitor for my startup's growth?"
  }
];

const AIChat = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate AI response - Replace with actual API call
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thank you for your question. I'm here to help with your tax and financial queries.",
          sender: 'ai'
        }]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            AI Tax Assistant
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4
            }}
          >
            Get instant answers to your tax and financial queries from our AI-powered assistant.
          </Typography>
        </Box>

        {/* Suggested Questions */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mb: 4 }}
          justifyContent="center"
        >
          {SUGGESTED_QUESTIONS.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleSuggestedQuestion(item.question)}
              sx={{
                p: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                bgcolor: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(10px)',
                border: '1px solid',
                borderColor: alpha(theme.palette.primary.main, 0.1),
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                  borderColor: 'primary.main'
                }
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
                  {item.emoji}
                </Typography>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {item.title}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          ))}
        </Stack>

        {/* Chat Container */}
        <Paper
          elevation={0}
          sx={{
            height: '60vh',
            p: 3,
            borderRadius: 4,
            bgcolor: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: theme.palette.divider,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Messages Area */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              px: 2,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'transparent'
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: alpha(theme.palette.primary.main, 0.2),
                borderRadius: '4px',
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.3)
                }
              }
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  mb: 2
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    maxWidth: '70%',
                    alignItems: 'flex-start'
                  }}
                >
                  {message.sender === 'ai' && (
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 32,
                        height: 32
                      }}
                    >
                      <SmartToyIcon sx={{ fontSize: 20 }} />
                    </Avatar>
                  )}
                  <Paper
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: message.sender === 'user' 
                        ? 'primary.main'
                        : alpha(theme.palette.background.paper, 0.9),
                      color: message.sender === 'user' ? 'white' : 'text.primary',
                      position: 'relative'
                    }}
                  >
                    <Typography variant="body1">
                      {message.text}
                    </Typography>
                    {message.sender === 'ai' && (
                      <IconButton
                        size="small"
                        onClick={() => handleCopy(message.text, index)}
                        sx={{
                          position: 'absolute',
                          right: -36,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: 'text.secondary',
                          opacity: 0.7,
                          '&:hover': { opacity: 1 }
                        }}
                      >
                        {copiedIndex === index ? <DoneIcon /> : <ContentCopyIcon />}
                      </IconButton>
                    )}
                  </Paper>
                  {message.sender === 'user' && (
                    <Avatar
                      sx={{
                        bgcolor: 'secondary.main',
                        width: 32,
                        height: 32
                      }}
                    >
                      <PersonIcon sx={{ fontSize: 20 }} />
                    </Avatar>
                  )}
                </Box>
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 32,
                    height: 32
                  }}
                >
                  <SmartToyIcon sx={{ fontSize: 20 }} />
                </Avatar>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.background.paper, 0.9),
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <CircularProgress size={16} />
                  <Typography variant="body2" color="text.secondary">
                    Thinking...
                  </Typography>
                </Paper>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              gap: 1,
              alignItems: 'flex-end',
              position: 'relative'
            }}
          >
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question here..."
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  bgcolor: alpha(theme.palette.background.paper, 0.9),
                  '&:hover': {
                    borderColor: 'primary.main'
                  }
                }
              }}
            />
            <IconButton
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              sx={{
                p: '10px',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'primary.dark'
                },
                '&.Mui-disabled': {
                  bgcolor: alpha(theme.palette.primary.main, 0.3),
                  color: 'white'
                }
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AIChat; 