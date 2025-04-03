import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Email fontSize="large" />,
      title: "Email",
      description: "Drop me a message anytime",
      action: "Send Email",
      link: "mailto:hbhr932@gmail.com"
    },
    {
      icon: <LinkedIn fontSize="large" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      link: "https://www.linkedin.com/in/yanir-winnik-84a7501bb/"
    },
    {
      icon: <GitHub fontSize="large" />,
      title: "GitHub",
      description: "Check out my projects",
      action: "View Profile",
      link: "https://github.com/yanirw"
    }
  ];

  return (
    <SectionWrapper>
      <Box
        id="contact"
        sx={{
          py: 12,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: 'rgba(13, 17, 23, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
              p: 6,
              mx: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h2" 
                gutterBottom 
                align="center"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Get in Touch
              </Typography>
              <Typography 
                variant="body1" 
                align="center" 
                sx={{ 
                  mb: 8, 
                  maxWidth: 800, 
                  mx: 'auto',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                Interested in collaborating or have a project in mind? 
                Feel free to reach out through any of these channels.
              </Typography>

              <Grid container spacing={4}>
                {contactMethods.map((method, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
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
                          textAlign: 'center',
                          borderRadius: 2,
                          backgroundColor: 'rgba(22, 27, 34, 0.7)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(22, 27, 34, 0.9)',
                            transform: 'translateY(-4px)',
                            transition: 'all 0.3s ease-in-out',
                          },
                        }}
                      >
                        <Box sx={{ color: '#FFFFFF', mb: 2, opacity: 0.9 }}>
                          {method.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{
                            color: '#FFFFFF',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            fontWeight: 500,
                          }}
                        >
                          {method.title}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ 
                            mb: 3,
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                          }}
                        >
                          {method.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#FFFFFF',
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            '&:hover': {
                              borderColor: 'rgba(255, 255, 255, 0.5)',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          {method.action}
                        </Button>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </SectionWrapper>
  );
};

export default Contact; 