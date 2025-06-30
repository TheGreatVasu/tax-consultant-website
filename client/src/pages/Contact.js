import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Chip,
  Backdrop,
  CircularProgress,
  Tooltip,
  Fab
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from '@mui/icons-material/Room';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    title: 'Visit Us',
    details: ['Delhi, India'],
    color: '#0047AB',
    action: {
      label: 'Get Directions',
      link: 'https://maps.app.goo.gl/B2chFZoXZRURi3QU6'
    }
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: 'Call Us',
    details: ['+91 9927848855', 'Mon - Fri: 9:00 AM - 6:00 PM'],
    color: '#0047AB',
    action: {
      label: 'Call Now',
      link: 'tel:+919927848855'
    }
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: 'Email Us',
    details: ['parth@rastogiassociates.com'],
    color: '#0047AB',
    action: {
      label: 'Send Email',
      link: 'mailto:info@rastogiassociates.com'
    }
  }
];

const services = [
  'Personal Tax Planning',
  'Corporate Tax Strategy',
  'Investment Planning',
  'Digital Asset Tax',
  'Global Tax Compliance',
  'Tax Analytics',
  'Business Advisory',
  'Financial Consulting'
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9-+() ]*$/, 'Invalid phone number')
    .required('Phone number is required'),
  service: Yup.string()
    .required('Please select a service'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (data.success) {
          setSnackbar({
            open: true,
            message: 'Thank you for your message. We will contact you soon!',
            severity: 'success'
          });
          resetForm();
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error) {
        setSnackbar({
          open: true,
          message: error.message || 'Failed to send message. Please try again later.',
          severity: 'error'
        });
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    }
  });

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          pt: { xs: 12, md: 15 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            opacity: 0.1,
            zIndex: 0,
            background: `radial-gradient(circle at 20% 30%, #0047AB40 0%, transparent 70%),
                        radial-gradient(circle at 80% 70%, #0047AB40 0%, transparent 70%)`
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0047AB, #002366)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 4, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}
              >
                Get expert financial guidance tailored to your needs
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mb: 4 }}
              >
                <Chip
                  icon={<CheckCircleIcon />}
                  label="Expert Consultation"
                  sx={{ 
                    borderColor: '#0047AB',
                    color: '#0047AB'
                  }}
                  variant="outlined"
                />
                <Chip
                  icon={<BusinessIcon />}
                  label="Professional Team"
                  sx={{ 
                    borderColor: '#0047AB',
                    color: '#0047AB'
                  }}
                  variant="outlined"
                />
                <Chip
                  icon={<ScheduleIcon />}
                  label="Quick Response"
                  sx={{ 
                    borderColor: '#0047AB',
                    color: '#0047AB'
                  }}
                  variant="outlined"
                />
              </Stack>
            </Box>
          </motion.div>

          {/* Contact Info Cards */}
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 40px ${info.color}30`
                      }
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${info.color}20, ${info.color}10)`,
                          color: info.color
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: info.color }}>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, idx) => (
                        <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {detail}
                        </Typography>
                      ))}
                      <Button
                        variant="outlined"
                        size="small"
                        href={info.action.link}
                        target={info.action.link.startsWith('http') ? '_blank' : '_self'}
                        sx={{
                          mt: 2,
                          color: info.color,
                          borderColor: info.color,
                          '&:hover': {
                            borderColor: info.color,
                            background: `${info.color}10`
                          }
                        }}
                      >
                        {info.action.label}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Contact Form and Map */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    height: '100%'
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ 
                      fontWeight: 700,
                      color: '#0047AB',
                      mb: 3
                    }}>
                      Send Us a Message
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name="name"
                            label="Your Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: 2,
                                background: 'rgba(255,255,255,0.9)'
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name="email"
                            label="Email Address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: 2,
                                background: 'rgba(255,255,255,0.9)'
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name="phone"
                            label="Phone Number"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: 2,
                                background: 'rgba(255,255,255,0.9)'
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            select
                            name="service"
                            label="Select Service"
                            value={formik.values.service}
                            onChange={formik.handleChange}
                            error={formik.touched.service && Boolean(formik.errors.service)}
                            helperText={formik.touched.service && formik.errors.service}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: 2,
                                background: 'rgba(255,255,255,0.9)'
                              }
                            }}
                          >
                            {services.map((service) => (
                              <MenuItem key={service} value={service}>
                                {service}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            multiline
                            rows={4}
                            name="message"
                            label="Your Message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            sx={{
                              '& .MuiInputBase-root': {
                                borderRadius: 2,
                                background: 'rgba(255,255,255,0.9)'
                              }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={formik.isSubmitting}
                            sx={{
                              py: 1.5,
                              borderRadius: 2,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              background: '#0047AB',
                              '&:hover': {
                                background: '#002366'
                              }
                            }}
                          >
                            {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '500px'
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 24, left: 24, zIndex: 2 }}>
                    <Paper
                      sx={{
                        p: 2,
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                    >
                      <RoomIcon sx={{ color: '#0047AB' }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#0047AB' }}>
                          Rastogi & Associates
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Delhi, India
                        </Typography>
                      </Box>
                    </Paper>
                  </Box>
                  <Box sx={{ height: '100%', width: '100%' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.06989649623435!2d77.22986835063656!3d28.53616239337726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3df9cdbc221%3A0x47f3e6f31e4e7ae0!2sRastogi%20%26%20Associates!5e0!3m2!1sen!2sin!4v1751203325722!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Floating Action Buttons */}
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 32 },
            right: { xs: 16, md: 32 },
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <Tooltip title="Chat on WhatsApp" placement="left">
            <Fab
              sx={{
                mb: 1,
                background: '#0047AB',
                color: 'white',
                '&:hover': {
                  background: '#002366',
                  transform: 'scale(1.1)'
                }
              }}
              component="a"
              href="https://wa.me/919927848855"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Call Us" placement="left">
            <Fab
              sx={{
                mb: 1,
                background: '#0047AB',
                color: 'white',
                '&:hover': {
                  background: '#002366',
                  transform: 'scale(1.1)'
                }
              }}
              component="a"
              href="tel:+919927848855"
            >
              <CallIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="Email Us" placement="left">
            <Fab
              sx={{
                mb: 1,
                background: '#0047AB',
                color: 'white',
                '&:hover': {
                  background: '#002366',
                  transform: 'scale(1.1)'
                }
              }}
              component="a"
              href="mailto:parth@rastogiassociates.com"
            >
              <EmailIcon />
            </Fab>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="left">
            <Fab
              sx={{
                mb: 1,
                background: '#0047AB',
                color: 'white',
                '&:hover': {
                  background: '#002366',
                  transform: 'scale(1.1)'
                }
              }}
              component="a"
              href="https://www.linkedin.com/company/rkbconsultants/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Box>

      {/* Loading Backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress sx={{ color: '#0047AB' }} />
      </Backdrop>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            borderRadius: 2,
            '& .MuiAlert-icon': {
              color: '#0047AB'
            }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
