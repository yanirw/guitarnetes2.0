import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Cloud, Security, Speed } from '@mui/icons-material';

const About = () => {
  const highlights = [
    {
      icon: <Cloud fontSize="large" />,
      title: "Cloud & Infrastructure",
      description: "Expert in GCP, Azure, and AWS cloud platforms with strong focus on Kubernetes and containerization"
    },
    {
      icon: <Code fontSize="large" />,
      title: "DevOps & Automation",
      description: "Specializing in CI/CD pipelines, GitOps, and Infrastructure as Code using modern tools and practices"
    },
    {
      icon: <Security fontSize="large" />,
      title: "Security & Best Practices",
      description: "Implementing robust security measures and DevSecOps practices in cloud environments"
    },
    {
      icon: <Speed fontSize="large" />,
      title: "Performance & Reliability",
      description: "Ensuring system reliability through monitoring, logging, and performance optimization"
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        backgroundColor: 'background.default',
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
            About Me
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}
          >
            As a Cloud and DevOps enthusiast, I have a vast background in Kubernetes, Infrastructure as Code (IaC), 
            CI/CD optimization, GitOps, and Scripting focusing on upholding best practices. With a self-taught, 
            adaptable approach, I am dedicated to continuous learning and maintaining high technical standards.
          </Typography>

          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      {highlight.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
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

export default About; 