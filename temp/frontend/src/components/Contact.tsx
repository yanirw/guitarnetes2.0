import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

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
    <Box
      id="contact"
      sx={{
        py: 12,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Get in Touch
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}
          >
            Interested in collaborating or have a project in mind? 
            Feel free to reach out through any of these channels.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
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
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-4px)',
                        transition: 'all 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {method.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {method.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {method.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 