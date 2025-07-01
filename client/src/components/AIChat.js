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
  Zoom,
  Divider,
  Button
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { API_KEYS } from '../config/api.config';
import api from '../services/api';

const SUGGESTED_QUESTIONS = [
  {
    title: "Tax Planning",
    emoji: "📊",
    question: "What are the best tax saving strategies for small businesses in 2024?",
    description: "Optimize your tax liability"
  },
  {
    title: "GST Compliance",
    emoji: "📑",
    question: "Can you explain the latest GST filing requirements and deadlines?",
    description: "Stay compliant with GST"
  },
  {
    title: "International Tax",
    emoji: "🌏",
    question: "How does double taxation avoidance work for international businesses?",
    description: "Navigate global taxation"
  },
  {
    title: "Business Advisory",
    emoji: "💼",
    question: "What financial metrics should I monitor for my startup's growth?",
    description: "Scale your business smartly"
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
      const response = await api.post('/ai/generate', { message: input });
      setMessages(prev => [...prev, {
        text: response.data.text,
        sender: 'ai'
      }]);
      setIsLoading(false);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: 'Sorry, I was unable to process your request. Please try again later.',
        sender: 'ai'
      }]);
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

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, ${alpha(theme.palette.secondary.main, 0.03)} 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
      />
      
      <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
        {/* Enhanced Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Box sx={{ mb: 3 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <PsychologyIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              AI Tax Assistant
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                mb: 3,
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Get instant, professional answers to your tax and financial queries from our AI-powered assistant
            </Typography>
            <Chip
              icon={<AutoAwesomeIcon />}
              label="Powered by Advanced AI"
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            />
          </Box>
        </Box>

        {/* Enhanced Suggested Questions */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              mb: 3,
              fontWeight: 600,
              color: 'text.primary'
            }}
          >
            Quick Questions
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ mb: 4 }}
            justifyContent="center"
            flexWrap="wrap"
          >
            {SUGGESTED_QUESTIONS.map((item, index) => (
              <Card
                key={index}
                onClick={() => handleSuggestedQuestion(item.question)}
                sx={{
                  p: 3,
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  bgcolor: 'background.paper',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid',
                  borderColor: alpha(theme.palette.primary.main, 0.1),
                  borderRadius: 3,
                  minWidth: { xs: '100%', sm: 280 },
                  maxWidth: { xs: '100%', sm: 320 },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main',
                    bgcolor: alpha(theme.palette.primary.main, 0.02)
                  }
                }}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        fontSize: '1.8rem'
                      }}
                    >
                      {item.emoji}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      fontStyle: 'italic'
                    }}
                  >
                    "{item.question}"
                  </Typography>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Enhanced Chat Container */}
        <Paper
          elevation={0}
          sx={{
            height: '65vh',
            borderRadius: 4,
            bgcolor: 'background.paper',
            backdropFilter: 'blur(20px)',
            border: '1px solid',
            borderColor: alpha(theme.palette.divider, 0.2),
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              p: 3,
              borderBottom: '1px solid',
              borderColor: alpha(theme.palette.divider, 0.1),
              bgcolor: alpha(theme.palette.background.paper, 0.8),
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 40,
                    height: 40
                  }}
                >
                  <SmartToyIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    AI Tax Assistant
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {isLoading ? 'Typing...' : 'Online'}
                  </Typography>
                </Box>
              </Box>
              {messages.length > 0 && (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={clearChat}
                  startIcon={<DeleteIcon />}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.85rem'
                  }}
                >
                  Clear Chat
                </Button>
              )}
            </Box>
          </Box>

          {/* Messages Area */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: 'auto',
              px: 3,
              py: 2,
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: alpha(theme.palette.primary.main, 0.2),
                borderRadius: '3px',
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.3)
                }
              }
            }}
          >
            {messages.length === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: 'text.secondary',
                  textAlign: 'center'
                }}
              >
                <PsychologyIcon sx={{ fontSize: 60, mb: 2, opacity: 0.5 }} />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                  Start a conversation
                </Typography>
                <Typography variant="body2">
                  Ask me anything about taxes, business, or financial planning
                </Typography>
              </Box>
            )}
            
            {messages.map((message, index) => (
              <Fade in={true} timeout={800} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                    mb: 3
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      maxWidth: '80%',
                      alignItems: 'flex-end',
                      flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
                    }}
                  >
                    {message.sender === 'ai' && (
                      <Avatar
                        sx={{
                          bgcolor: 'primary.main',
                          width: 40,
                          height: 40,
                          boxShadow: 2
                        }}
                      >
                        <SmartToyIcon />
                      </Avatar>
                    )}
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        bgcolor: message.sender === 'user'
                          ? 'primary.main'
                          : alpha(theme.palette.background.paper, 0.8),
                        color: message.sender === 'user' ? 'white' : 'text.primary',
                        boxShadow: message.sender === 'user' ? 4 : 2,
                        fontSize: '1.1rem',
                        wordBreak: 'break-word',
                        minWidth: 80,
                        maxWidth: '100%',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        borderTopLeftRadius: message.sender === 'user' ? 20 : 8,
                        borderTopRightRadius: message.sender === 'user' ? 8 : 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        backdropFilter: message.sender === 'ai' ? 'blur(10px)' : 'none',
                        '&:hover': {
                          boxShadow: message.sender === 'user' ? 6 : 4,
                        }
                      }}
                    >
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontSize: '1rem', 
                          lineHeight: 1.7,
                          fontWeight: message.sender === 'user' ? 500 : 400
                        }}
                      >
                        {message.text}
                      </Typography>
                      {message.sender === 'ai' && (
                        <Tooltip title={copiedIndex === index ? 'Copied!' : 'Copy response'} arrow TransitionComponent={Zoom}>
                          <IconButton
                            size="small"
                            sx={{ 
                              position: 'absolute', 
                              top: 8, 
                              right: 8, 
                              color: 'text.secondary',
                              opacity: 0.7,
                              '&:hover': { opacity: 1 }
                            }}
                            onClick={() => handleCopy(message.text, index)}
                          >
                            {copiedIndex === index ? <DoneIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                          </IconButton>
                        </Tooltip>
                      )}
                    </Paper>
                    {message.sender === 'user' && (
                      <Avatar
                        sx={{
                          bgcolor: 'secondary.main',
                          width: 40,
                          height: 40,
                          boxShadow: 2
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                    )}
                  </Box>
                </Box>
              </Fade>
            ))}
            <div ref={messagesEndRef} />
            {isLoading && (
              <Fade in={true}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2, ml: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 40,
                      height: 40
                    }}
                  >
                    <SmartToyIcon />
                  </Avatar>
                  <Paper
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.background.paper, 0.8),
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      minWidth: 120
                    }}
                  >
                    <CircularProgress size={20} color="primary" />
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      AI is thinking...
                    </Typography>
                  </Paper>
                </Box>
              </Fade>
            )}
          </Box>

          {/* Enhanced Input Area */}
          <Box
            component="form"
            onSubmit={e => { e.preventDefault(); handleSend(); }}
            sx={{
              p: 3,
              borderTop: '1px solid',
              borderColor: alpha(theme.palette.divider, 0.1),
              bgcolor: alpha(theme.palette.background.paper, 0.9),
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'background.paper',
                borderRadius: 4,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid',
                borderColor: alpha(theme.palette.divider, 0.1),
                p: 1,
                transition: 'all 0.3s ease',
                '&:focus-within': {
                  boxShadow: '0 4px 25px rgba(0,0,0,0.12)',
                  borderColor: 'primary.main'
                }
              }}
            >
              <TextField
                fullWidth
                variant="standard"
                placeholder="Ask me anything about taxes, business, or financial planning..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                InputProps={{
                  disableUnderline: true,
                  sx: { 
                    fontSize: '1rem', 
                    color: 'text.primary', 
                    px: 2,
                    py: 1.5
                  }
                }}
                sx={{ bgcolor: 'transparent' }}
                autoFocus
              />
              <IconButton
                color="primary"
                type="submit"
                disabled={isLoading || !input.trim()}
                sx={{
                  bgcolor: isLoading || !input.trim() ? alpha(theme.palette.grey[300], 0.5) : 'primary.main',
                  color: isLoading || !input.trim() ? 'grey.500' : 'white',
                  transition: 'all 0.3s ease',
                  width: 48,
                  height: 48,
                  '&:hover': {
                    bgcolor: isLoading || !input.trim() ? alpha(theme.palette.grey[300], 0.5) : 'primary.dark',
                    transform: 'scale(1.05)'
                  },
                  '&:active': {
                    transform: 'scale(0.95)'
                  },
                  boxShadow: isLoading || !input.trim() ? 'none' : 3
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
            <Typography 
              variant="caption" 
              sx={{ 
                display: 'block', 
                textAlign: 'center', 
                mt: 1, 
                color: 'text.secondary',
                fontSize: '0.75rem'
              }}
            >
              Press Enter to send • Shift + Enter for new line
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AIChat; 