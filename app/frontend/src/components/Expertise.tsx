import React from 'react';
import { Box, Container, Paper, Typography, Grid, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import BusinessIcon from '@mui/icons-material/Business';
import AutomationIcon from '@mui/icons-material/AutoFixHigh';

const certifications = [
  {
    title: 'Certified Cloud Professional',
    subtitle: 'Google Cloud Professional DevOps Engineer',
    description: 'Expert in Kubernetes management, CI/CD pipelines, and SRE practices',
    icon: <CloudIcon sx={{ fontSize: 34, color: '#4285F4' }} />,
    link: 'https://www.credly.com/badges/9c4f0920-5e64-4b51-a8e2-aa98b5f75d72/linked_in_profile',
  },
  {
    title: 'Industry Experience',
    subtitle: 'Startups to Enterprise',
    description: 'Building and optimizing cloud infrastructure across diverse business environments',
    icon: <BusinessIcon sx={{ fontSize: 34, color: '#34A853' }} />,
  },
  {
    title: 'DevOps Enthusiast',
    subtitle: 'Pushing Boundaries & Building Solutions',
    description: 'Passionate about DevOps and Cloud tech, always exploring and sharing new insights',
    icon: <AutomationIcon sx={{ fontSize: 34, color: '#EA4335' }} />,
  }
];

const Expertise = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0A0A0A',
        py: 6,
        position: 'relative',
        zIndex: 1
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              >
                {cert.icon}
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mt: 2,
                    mb: 0.75,
                    fontSize: '1.15rem',
                    fontWeight: 'bold',
                    color: 'text.primary'
                  }}
                >
                  {cert.title}
                </Typography>
                <Typography 
                  variant="subtitle2"
                  color="text.secondary" 
                  gutterBottom
                  sx={{ 
                    fontSize: '0.95rem',
                    mb: 1
                  }}
                >
                  {cert.subtitle}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ 
                    fontSize: '0.9rem',
                    mb: cert.link ? 2 : 0
                  }}
                >
                  {cert.description}
                </Typography>
                {cert.link && (
                  <Button
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    size="small"
                    sx={{
                      minWidth: 'auto',
                      fontSize: '0.8rem',
                      py: 0.5,
                      px: 1.5,
                      borderRadius: '12px',
                      textTransform: 'none',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      color: theme => theme.palette.primary.light,
                      '&:hover': {
                        borderColor: theme => theme.palette.primary.light,
                        backgroundColor: 'rgba(96, 165, 250, 0.1)'
                      }
                    }}
                  >
                    View Certification
                  </Button>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Expertise; 