import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Code as CodeIcon, Cloud as CloudIcon, Security as SecurityIcon } from '@mui/icons-material';

const About = () => {
  return (
    <Box
      id="about"
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
              }}
            >
              About Me
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
              A passionate DevOps engineer with vast experience in cloud infrastructure and automation
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
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
                    <Box sx={{ color: '#FFFFFF', mb: 3, opacity: 0.9 }}>
                      <CodeIcon fontSize="large" />
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
                      Development
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      }}
                    >
                      Experienced in building and maintaining CI/CD pipelines, implementing infrastructure as code, and automating deployment processes.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
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
                    <Box sx={{ color: '#FFFFFF', mb: 3, opacity: 0.9 }}>
                      <CloudIcon fontSize="large" />
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
                      Cloud Infrastructure
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      }}
                    >
                      Proficient in managing cloud resources across multiple platforms, with a focus on scalability, reliability, and cost optimization.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
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
                    <Box sx={{ color: '#FFFFFF', mb: 3, opacity: 0.9 }}>
                      <SecurityIcon fontSize="large" />
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
                      Security & Best Practices
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      }}
                    >
                      Committed to implementing security best practices and maintaining compliance standards in all infrastructure deployments.
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 