import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  alpha
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import TimelineIcon from '@mui/icons-material/Timeline';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import BarChartIcon from '@mui/icons-material/BarChart';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import GavelIcon from '@mui/icons-material/Gavel';
import PublicIcon from '@mui/icons-material/Public';
import CalculateIcon from '@mui/icons-material/Calculate';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CloseIcon from '@mui/icons-material/Close';
import SavingsIcon from '@mui/icons-material/Savings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const features = [
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Single  Leadership",
    description: "Direct access to leadership ensuring personalized attention and expert guidance for client"
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: "Dedicated Analysis",
    description: "In-depth analysis of each client's unique requirements with customized solutions"
  },
  {
    icon: <TimelineIcon sx={{ fontSize: 40 }} />,
    title: "Data-Driven Insights",
    description: "Advanced analytics and real-time monitoring for informed financial decisions"
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Swift Response",
    description: "Quick turnaround times with direct communication and efficient processing"
  }
];

const serviceCards = [
  {
    icon: <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Corporate Services",
    description: "Comprehensive business solutions including company registration, compliance, and restructuring",
    features: [
      "Company Registration",
      "Corporate Compliance",
      "Business Restructuring",
      "Due Diligence"
    ],
    link: "/services/corporate-services"
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Tax Advisory",
    description: "Expert tax planning and compliance services for businesses and individuals",
    features: [
      "Tax Planning",
      "GST Compliance",
      "International Taxation",
      "Tax Audits"
    ],
    link: "/services/tax-advisory"
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Financial Advisory",
    description: "Strategic financial planning and consulting for sustainable growth",
    features: [
      "Financial Planning",
      "Investment Advisory",
      "Risk Management",
      "Wealth Management"
    ],
    link: "/services/financial-advisory"
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Business Consulting",
    description: "Strategic business solutions and growth consulting services",
    features: [
      "Business Strategy",
      "Market Analysis",
      "Growth Planning",
      "Performance Optimization"
    ],
    link: "/services/business-consulting"
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Bookkeeping Services",
    description: "Comprehensive bookkeeping and accounting solutions",
    features: [
      "Account Maintenance",
      "Financial Statements",
      "Payroll Services",
      "Reconciliation"
    ],
    link: "/services/bookkeeping-services"
  },
  {
    icon: <GavelIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Litigation Services",
    description: "Expert representation in tax and corporate litigation matters",
    features: [
      "Tax Litigation",
      "Corporate Disputes",
      "Legal Compliance",
      "Appeal Support"
    ],
    link: "/services/litigation-services"
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "International Tax",
    description: "Specialized services for international tax planning and compliance",
    features: [
      "Cross-border Taxation",
      "Transfer Pricing",
      "FEMA Compliance",
      "International Planning"
    ],
    link: "/services/international-tax-services"
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: "Planning Services",
    description: "Strategic tax and financial planning for optimal outcomes",
    features: [
      "Tax Planning",
      "Estate Planning",
      "Succession Planning",
      "Business Planning"
    ],
    link: "/services/planning-services"
  }
];

const statsData = [
  {
    icon: <PeopleAltIcon sx={{ fontSize: 40 }} />,
    value: '100+',
    label: 'Happy Clients',
    description: 'Trusted by businesses',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)'
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 40 }} />,
    value: "1000Cr+",
    label: "Tax Savings Delivered",
    description: "Total tax savings for our clients",
    gradient: 'linear-gradient(135deg, #283593 0%, #1565C0 100%)'
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    value: '1000+',
    label: 'Tax Returns Filed',
    description: 'Successfully processed returns',
    gradient: 'linear-gradient(135deg, #3949ab 0%, #1976D2 100%)'
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
    value: "99.9%",
    label: "Accuracy Rate",
    description: "In tax calculations and filings",
    gradient: 'linear-gradient(135deg, #1a237e 0%, #2196F3 100%)'
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    value: "500+",
    label: "Enterprise Clients",
    description: "Trust our services",
    gradient: 'linear-gradient(135deg, #0d47a1 0%, #42A5F5 100%)'
  }
];

const whyChooseUs = [
  {
    icon: <StarIcon />,
    title: "Personal Attention",
    description: "Direct interaction with senior leadership for every client engagement"
  },
  {
    icon: <LocalLibraryIcon />,
    title: "Customized Solutions",
    description: "Tailored strategies based on thorough analysis of your specific needs"
  },
  {
    icon: <HandshakeIcon />,
    title: "Client-First Approach",
    description: "Dedicated focus on understanding and meeting your unique requirements"
  },
  {
    icon: <TrendingUpIcon />,
    title: "Growth Partnership",
    description: "Long-term commitment to your business success and growth"
  }
];

const testimonials = [
  {
    name: "Arun Mehta",
    position: "Managing Director",
    company: "Mehta Industries Pvt Ltd",
    image: "/images/testimonials/arun.jpg",
    content: "Rastogi & Associates transformed our tax management with their expertise. Their strategic guidance helped us optimize our tax structure and improve financial planning.",
    rating: 5,
    metrics: {
      savings: "₹2.5Cr+",
      growth: "40%"
    }
  },
  {
    name: "Neha Gupta",
    position: "CEO",
    company: "TechVision Solutions",
    image: "/images/testimonials/neha.jpg",
    content: "Outstanding service in managing our company's international tax matters. Their expertise in handling complex tax structures has been invaluable for our global operations.",
    rating: 5,
    metrics: {
      returns: "100%",
      savings: "₹85L+"
    }
  },
  {
    name: "Vikram Singh",
    position: "Founder",
    company: "GreenTech Startups",
    image: "/images/testimonials/vikram.jpg",
    content: "As a growing startup, their comprehensive tax planning and compliance support has been crucial. They helped us navigate complex regulations while focusing on growth.",
    rating: 5,
    metrics: {
      compliance: "100%",
      growth: "3x"
    }
  },
  {
    name: "Meera Kapoor",
    position: "CFO",
    company: "Global Traders Ltd",
    image: "/images/testimonials/meera.jpg",
    content: "Their expertise in international taxation and GST has helped us maintain perfect compliance while expanding our business across multiple countries.",
    rating: 5,
    metrics: {
      accuracy: "100%",
      savings: "₹1.2Cr+"
    }
  }
];

const seoData = {
  title: "Rastogi & Associates | Tax Consultants in Delhi NCR",
  description: "Transform your financial future with Rastogi & Associates. Expert tax consulting, digital financial solutions, and personalized business advisory services. Get real-time insights, AI-powered analysis, and dedicated leadership support.",
  keywords: "modern tax consultant, digital tax solutions, AI tax planning, financial technology, tax automation, real-time tax insights, cloud accounting, digital transformation, business advisory, tax tech solutions, automated compliance, smart tax planning",
  ogTitle: "Next-Gen Tax & Financial Solutions | Rastogi & Associates",
  ogDescription: "Experience the future of tax consulting with AI-powered insights, real-time analytics, and personalized digital solutions. Transform your financial journey with expert guidance.",
  ogUrl: "https://www.rastogiassociates.com",
  twitterCard: "summary_large_image",
  twitterSite: "@RastogiAssoc",
  twitterCreator: "@RastogiAssoc"
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Rastogi & Associates",
  "description": "Next-generation tax consulting and financial advisory services in Delhi NCR",
  "image": "https://www.rastogiassociates.com/images/modern-tax-banner.jpg",
  "url": "https://www.rastogiassociates.com",
  "@id": "https://www.rastogiassociates.com/#organization",
  "foundingDate": "2018",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
  },
  "hasMap": "https://www.google.com/maps?cid=YOURMAPID",
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
  "telephone": "+91-9927848855",
  "priceRange": "₹₹₹",
  "areaServed": ["Delhi", "Noida", "Gurgaon", "Faridabad"],
  "serviceType": [
    "Digital Tax Solutions",
    "AI-Powered Financial Advisory",
    "Real-time Tax Analytics",
    "Cloud Accounting Services",
    "International Tax Planning",
    "Business Technology Consulting"
  ],
  "sameAs": [
    "https://www.facebook.com/RastogiAssociates",
    "https://twitter.com/RastogiAssoc",
    "https://www.linkedin.com/company/rkbconsultants/posts/?feedView=all",
    "https://www.instagram.com/rastogiassociates"
  ]
};

const heroContent = {
  title: "Future-Ready Financial Solutions",
  subtitle: "Transform your business with AI-powered tax insights and real-time financial analytics",
    features: [
    "AI-Powered Tax Analysis & Planning",
    "Real-Time Financial Dashboard",
    "Cloud-Based Document Management",
    "24/7 Digital Support Access"
  ],
  stats: [
    { number: "98%", label: "Client Satisfaction" },
    { number: "₹500Cr+", label: "Tax Savings Delivered" },
    { number: "5000+", label: "Digital Returns Filed" },
    { number: "24/7", label: "Support Available" }
  ]
};

const digitalFeatures = [
  {
    icon: <BarChartIcon />,
    title: 'Requirement Analysis',
    description: 'Comprehensive analysis of your business needs and objectives'
  },
  {
    icon: <DevicesIcon />,
    title: 'Solution Design',
    description: 'Customized strategy development based on your specific requirements'
  },
  {
    icon: <SecurityIcon />,
    title: 'Implementation',
    description: 'Seamless execution with direct leadership oversight'
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Ongoing Support',
    description: 'Continuous monitoring and adjustments to ensure optimal results'
  }
];

const modernFeatures = [
  {
    icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze your financial data to identify optimization opportunities and predict tax implications",
    benefits: ["Real-time tax impact assessment", "Predictive analytics", "Pattern recognition"]
  },
  {
    icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
    title: "Cloud Integration",
    description: "Seamless cloud-based platform for secure document management and real-time collaboration",
    benefits: ["24/7 access", "Automatic backups", "Multi-device sync"]
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: "Real-Time Dashboard",
    description: "Live monitoring of your financial metrics and tax positions with instant insights",
    benefits: ["Live financial tracking", "Custom alerts", "Performance metrics"]
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Enhanced Security",
    description: "Enterprise-grade security protocols protecting your sensitive financial data",
    benefits: ["End-to-end encryption", "Multi-factor auth", "Audit trails"]
  }
];

const solutionPackages = [
  {
    name: "GST Services",
    description: "Comprehensive GST solutions and compliance services",
    features: [
      "GST Registration",
      "Return Filing",
      "Input Credit Management",
      "GST Audit Support",
      "Compliance Monitoring"
    ],
    icon: <CalculateIcon sx={{ fontSize: 40 }} />,
    tag: "GST Solutions"
  },
  {
    name: "Litigation Services",
    description: "Expert legal representation and dispute resolution",
    features: [
      "Tax Appeals & Representation",
      "Dispute Resolution",
      "Legal Documentation",
      "Case Management",
      "Expert Consultation"
    ],
    icon: <GavelIcon sx={{ fontSize: 40 }} />,
    tag: "Legal Support"
  },
  {
    name: "Tax Services",
    description: "Complete tax planning and compliance solutions",
    features: [
      "Income Tax Filing",
      "Tax Planning & Advisory",
      "International Taxation",
      "Corporate Tax Services",
      "Tax Audit Support"
    ],
    icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
    tag: "Tax Solutions"
  }
];

const StatsSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(26, 35, 126, 0.08) 0%, rgba(26, 35, 126, 0) 50%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#1a237e',
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            OUR IMPACT
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              }
            }}
          >
            Numbers That Define Us
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', mb: 2 }}
          >
            Our track record of excellence in delivering value to our clients
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {statsData.map((stat, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={index === 4 ? 12 : 6} 
              lg={index === 4 ? 12 : 3} 
              key={stat.label}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: 'rgba(26, 35, 126, 0.1)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderColor: 'rgba(26, 35, 126, 0.2)',
                      '& .stat-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: stat.gradient,
                      opacity: 0.05,
                      zIndex: 0
                    }
                  }}
                >
                  <Box
                    className="stat-icon"
                    sx={{
                      p: 2,
                      borderRadius: '50%',
                      background: stat.gradient,
                      color: 'white',
                      mb: 3,
                      transition: 'transform 0.3s ease-in-out',
                      zIndex: 1
                    }}
                  >
                    {stat.icon}
                  </Box>
                  
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: {
                        xs: '2.5rem',
                        md: '3rem'
                      },
                      zIndex: 1
                    }}
                  >
                    {stat.value}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: '#1a237e',
                      textAlign: 'center',
                      zIndex: 1
                    }}
                  >
                    {stat.label}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textAlign: 'center',
                      zIndex: 1
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:image" content={seoData.ogImage} />
        <link rel="canonical" href={seoData.ogUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          backgroundImage: 'url("/images/company/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 1.5,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  Serving Individuals, Startups & Corporates Since 2021
                </Typography>
                
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    color: '#1a237e',
                    mb: 2,
                    lineHeight: 1.2
                  }}
                >
                  Expert Consultancy You Can Trust
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 3,
                    lineHeight: 1.3
                  }}
                >
                  Your Strategic Partner in Growth Across Delhi NCR
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  At Rastogi and Associates, we offer tailored solutions in tax consultancy, legal advisory, and business compliance. Backed by experience, driven by integrity.
                </Typography>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                  {[
                    {
                      title: 'Tax Consultancy',
                      description: 'Comprehensive tax solutions and planning'
                    },
                    {
                      title: 'Legal Advisory',
                      description: 'Expert guidance on business and corporate law'
                    },
                    {
                      title: 'Business Compliance',
                      description: 'Ensuring regulatory compliance and documentation'
                    },
                    {
                      title: 'Financial Planning',
                      description: 'Strategic financial advice for growth and stability'
                    }
                  ].map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box
                          sx={{
                            minWidth: 24,
                            mt: 0.5
                          }}
                        >
                          <CheckCircleOutlineIcon color="primary" />
                </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {feature.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {feature.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Right side content can be added here if needed */}
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'primary.main'
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' }
              }}
            >
              Comprehensive Solutions for Your Business Needs
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                mb: 6
              }}
            >
              Expert guidance in taxation, legal compliance, and business advisory services tailored for your organization
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {serviceCards.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                  component={RouterLink}
                  to={service.link}
                  sx={{
                    height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    textDecoration: 'none',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main'
                    }
                  }}
                >
                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                  <Typography
                          variant="h6"
                    sx={{
                            ml: 2,
                      fontWeight: 600,
                            color: 'text.primary'
                    }}
                  >
                    {service.title}
                  </Typography>
                      </Box>
                  <Typography
                        variant="body2"
                    sx={{
                          mb: 2,
                      color: 'text.secondary',
                          minHeight: '3em'
                    }}
                  >
                    {service.description}
                  </Typography>
                      <List dense>
                    {service.features.map((feature, idx) => (
                          <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <CheckCircleIcon sx={{ fontSize: 20, color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                variant: 'body2',
                                color: 'text.primary'
                              }}
                            />
                          </ListItem>
                    ))}
                      </List>
                    </CardContent>
                    <Box
                    sx={{
                        p: 2,
                        pt: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          '& .MuiSvgIcon-root': {
                            ml: 1,
                            transition: 'transform 0.2s'
                          },
                          '&:hover .MuiSvgIcon-root': {
                            transform: 'translateX(4px)'
                      }
                    }}
                  >
                    Learn More
                        <ArrowForwardIcon />
                      </Typography>
                </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={RouterLink}
              to="/services"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 2,
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                textTransform: 'none'
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Digital Transformation Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: {
                    xs: '2rem',
                    sm: '2.5rem',
                    md: '3rem'
                  }
                }}
              >
                Our Client-Focused Approach
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.8 }}
              >
                Experience personalized tax solutions with direct leadership engagement at every step of your journey.
              </Typography>
              <Grid container spacing={3}>
                {digitalFeatures.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{
                          color: 'primary.main',
                          bgcolor: 'primary.lighter',
                          p: 1,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/digital-platform.svg"
                alt="Digital Tax Platform"
                sx={{
                  width: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 20px 40px rgba(26, 35, 126, 0.15))'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid',
                      borderColor: 'rgba(26, 35, 126, 0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(26, 35, 126, 0.1)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          mb: 2,
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 2,
                          background: 'rgba(26, 35, 126, 0.05)',
                          color: 'primary.main'
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box 
        sx={{ 
          py: 10,
          bgcolor: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                    opacity: 0.1,
                    zIndex: 0
                  }
                }}
              >
            <Typography
                  variant="h3" 
              sx={{
                    mb: 3,
                fontWeight: 700,
                    color: '#1a237e',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  About Us
            </Typography>
                
            <Typography
              variant="h5"
                  sx={{ 
                    mb: 3,
                    color: 'primary.main',
                    fontWeight: 600,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  Your Trusted Partner in Financial Excellence
            </Typography>

                <Typography 
                  variant="body1" 
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  With over two decades of experience in tax consultation and financial advisory, 
                  we have established ourselves as a leading name in providing comprehensive tax and financial solutions. 
                  Our team of certified professionals brings expertise across various domains of taxation and finance.
                    </Typography>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {[
                    {
                      title: 'Expert Team',
                      description: 'Certified professionals with deep industry knowledge'
                    },
                    {
                      title: 'Personalized Approach',
                      description: 'Tailored solutions for your specific needs'
                    },
                    {
                      title: 'Proven Track Record',
                      description: 'Consistent success in complex tax matters'
                    },
                    {
                      title: 'Complete Compliance',
                      description: 'Up-to-date with latest tax regulations'
                    }
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            minWidth: 40,
                            height: 40,
                            borderRadius: 1,
                            bgcolor: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            '& svg': { fontSize: 20 }
                          }}
                        >
                          <CheckCircleIcon />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
              </Grid>
            ))}
          </Grid>

            <Button
              variant="contained"
                  component={RouterLink}
                  to="/about"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                    py: 1.5,
                    bgcolor: 'primary.main',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                '&:hover': {
                      bgcolor: 'primary.dark',
                  transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
                  Learn More About Us
            </Button>
          </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: '80%',
                    height: '80%',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                    opacity: 0.1,
                    zIndex: 0
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                                          <Typography
                        variant="body1"
                        sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        transform: 'translateY(20px)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                                          <Typography
                        variant="body1"
                        sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        position: 'relative',
                        zIndex: 1
                      }}
                    />
                  </Grid>
               
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem'
                }
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                fontSize: {
                  xs: '1rem',
                  sm: '1.1rem',
                  md: '1.25rem'
                }
              }}
            >
              Experience excellence in tax consulting with our expert team
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid',
                      borderColor: 'rgba(26, 35, 126, 0.1)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(26, 35, 126, 0.1)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        sx={{
                          mb: 2,
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 2,
                          background: 'rgba(26, 35, 126, 0.05)',
                          color: 'primary.main'
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Modern Testimonials Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 2,
                mb: 2,
                display: 'block'
              }}
            >
              CLIENT SUCCESS STORIES
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem'
                }
              }}
            >
              Client Success Stories
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
            >
              See how we've helped businesses achieve significant tax savings and ensure perfect compliance while supporting their growth
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
              sx={{
                      p: 3.5,
                      height: '100%',
                      borderRadius: 3,
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                        background: 'rgba(255, 255, 255, 0.8)'
                      }
                    }}
                  >
                    {/* Profile Section */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 2,
                      mb: 3
                    }}>
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ 
                          width: 56,
                          height: 56,
                          background: 'linear-gradient(45deg, #1a237e, #0d47a1)',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: '#1a237e',
                          mb: 0.5,
                          lineHeight: 1.2
                        }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{
                          color: 'text.secondary',
                          fontSize: '0.875rem',
                          lineHeight: 1.2
                        }}>
                          {testimonial.position} • {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Content */}
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: 'text.primary',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        minHeight: '80px'
                      }}
                    >
                      {testimonial.content}
                    </Typography>

                    {/* Metrics */}
                    <Box sx={{ 
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 2,
                      mb: 2
                    }}>
                      {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                          <Box
                          key={idx}
                            sx={{
                              p: 2,
                              borderRadius: 2,
                            background: idx === 0 ? 
                              'linear-gradient(135deg, rgba(26, 35, 126, 0.08), rgba(13, 71, 161, 0.08))' :
                              'linear-gradient(135deg, rgba(13, 71, 161, 0.08), rgba(26, 35, 126, 0.08))',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                            }}
                          >
                            <Typography
                            variant="body2"
                              sx={{
                              color: 'text.secondary',
                              textTransform: 'capitalize',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                                mb: 0.5
                              }}
                            >
                            {key}
                            </Typography>
                            <Typography
                            variant="h5"
                              sx={{
                              fontWeight: 700,
                              color: '#1a237e',
                              fontSize: '1.5rem',
                              lineHeight: 1
                              }}
                            >
                            {value}
                            </Typography>
                          </Box>
                      ))}
                    </Box>

                    {/* Rating */}
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 0.5,
                        mt: 'auto'
                      }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          sx={{ 
                            fontSize: 16,
                            color: '#ffd700'
                          }} 
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Professional Statistics Section */}
          <StatsSection />

          {/* Solutions & Packages Section */}
          <Box
            sx={{
              py: { xs: 8, md: 12 },
              background: 'linear-gradient(135deg, #ffffff 0%, #f6f9fc 100%)'
            }}
          >
            <Container maxWidth="lg">
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  TAILORED SOLUTIONS
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                fontSize: {
                      xs: '2rem',
                      sm: '2.5rem',
                      md: '3rem'
                    }
                  }}
                >
                  Solutions Designed for Your Success
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
                >
                  Discover our customized packages tailored to your business needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
                {solutionPackages.map((solution, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                >
                      <Paper
                    elevation={0}
                    sx={{
                          p: 4,
                      height: '100%',
                          borderRadius: 4,
                          position: 'relative',
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid',
                      borderColor: 'rgba(26, 35, 126, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(26, 35, 126, 0.1)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                        <Chip
                          label={solution.tag}
                          color="primary"
                            sx={{
                            position: 'absolute',
                            top: -12,
                            right: 24,
                            fontWeight: 600
                          }}
                        />
                        <Box
                          sx={{
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 2,
                              bgcolor: 'primary.lighter',
                              color: 'primary.main'
                            }}
                          >
                            {solution.icon}
                      </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              color: 'text.primary'
                            }}
                          >
                            {solution.name}
                          </Typography>
                        </Box>

                      <Typography
                        variant="body1"
                        sx={{
                            mb: 4,
                          color: 'text.secondary',
                            minHeight: 48
                        }}
                      >
                          {solution.description}
                      </Typography>

                        <List>
                          {solution.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckCircleIcon color="primary" />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                          sx={{
                                  '& .MuiListItemText-primary': {
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>

                        <Box sx={{ mt: 4 }}>
                          <Button
                            component={RouterLink}
                            to="/contact"
                            variant="outlined"
                            fullWidth
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                              py: 2,
                              borderWidth: 2,
                              '&:hover': {
                                borderWidth: 2,
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 20px rgba(26, 35, 126, 0.1)'
                              }
                            }}
                          >
                            Contact for Pricing
                          </Button>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* Modern Tools Section - Add this before the Custom Solution Box */}
              <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      bgcolor: '#f8f9ff',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.03)'
                    }}
                  >
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={12} md={7}>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                          Enhanced Service Delivery
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                          While we maintain our core expertise in traditional tax consultancy and departmental services, 
                          we leverage modern tools to enhance our service delivery:
                        </Typography>
                        <Grid container spacing={2}>
                          {[
                            {
                              title: 'Smart Document Processing',
                              description: 'Faster document analysis and data extraction for quicker service'
                            },
                            {
                              title: 'Automated Compliance Checks',
                              description: 'Reducing human error in regulatory compliance'
                            },
                            {
                              title: 'Intelligent Tax Planning',
                              description: 'Data-driven insights for optimal tax strategies'
                            }
                          ].map((feature) => (
                            <Grid item xs={12} sm={6} key={feature.title}>
                              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                                <Box
                                  sx={{
                                    minWidth: 40,
                                    height: 40,
                                    borderRadius: 1,
                            bgcolor: 'primary.main',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    '& svg': { fontSize: 20 }
                                  }}
                                >
                                  <CheckCircleIcon />
                                </Box>
                        <Box>
                                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                    {feature.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                                    {feature.description}
                          </Typography>
                        </Box>
                      </Box>
              </Grid>
            ))}
          </Grid>
                      </Grid>
                      <Grid item xs={12} md={5}>
                        <Box
                          component="img"
                          src="/images/digital-platform.svg"
                          alt="Modern Tax Solutions"
                          sx={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: 400,
                            mx: 'auto',
                            display: 'block'
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
        </Container>
      </Box>

              {/* Custom Solution Box */}
      <Box
        sx={{
                  mt: 8,
                  p: 6,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.97) 0%, rgba(13, 71, 161, 0.97) 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
                    pointerEvents: 'none'
                  }
                }}
              >
          <Typography
            variant="h3"
            sx={{
                    mb: 2, 
              fontWeight: 700,
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontSize: {
                      xs: '2rem',
                      sm: '2.5rem',
                      md: '3rem'
                    }
                  }}
                >
                  Need a Custom Solution?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
                    color: 'rgba(255,255,255,0.95)', 
                    maxWidth: '800px', 
                    mx: 'auto',
                    lineHeight: 1.6,
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              fontSize: {
                xs: '1rem',
                      sm: '1.15rem',
                md: '1.25rem'
              }
            }}
          >
                  Our experts will analyze your business needs and create a tailored package that perfectly matches your requirements
          </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
                      bgcolor: '#ffffff',
                      color: 'primary.main',
              px: 6,
                      py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                        bgcolor: '#f5f5f5',
                transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
              }
            }}
          >
            Schedule a Consultation
          </Button>
                  <Button
                    component={RouterLink}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      color: '#ffffff',
                      borderColor: 'rgba(255,255,255,0.8)',
                      borderWidth: '2px',
                      px: 6,
                      py: 1.875,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(4px)',
                      '&:hover': {
                        borderColor: '#ffffff',
                        borderWidth: '2px',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
