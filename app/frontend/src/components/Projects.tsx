import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub } from '@mui/icons-material';
import { Grid as MuiGrid } from '@mui/material';
import SectionWrapper from './SectionWrapper';

const Projects = () => {
  const projects = [
    {
      title: "Guitarnetes 2.0",
      description: "A demonstration of modern DevOps methodologies through a simple 2-microservice app. This personal lab environment lets me experiment with new technologies and best practices. The Kubernetes cluster hosting this project also runs this portfolio website among other applications.",
      technologies: ["Kubernetes", "Docker", "CI/CD", "Microservices", "GitOps"],
      link: "https://github.com/yanirw/guitarnetes2.0"
    },
    {
      title: "GKE Multi-Container Orchestration",
      description: "Fibonacci calculator app deployed using GKE, Jenkins, and Docker; demonstrating microservices architecture and CI/CD in a cloud environment.",
      technologies: ["GKE", "Jenkins", "Docker", "Microservices"],
      link: "https://github.com/yanirw/GKE-Multi-Container-Orchestration"
    }
  ];

  return (
    <SectionWrapper>
      <Box
        id="projects"
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
                  mb: 8,
                }}
              >
                Projects
              </Typography>

              <MuiGrid container spacing={4}>
                {projects.map((project, index) => (
                  <MuiGrid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
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
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography 
                            variant="h5" 
                            gutterBottom 
                            component="h3"
                            sx={{
                              color: '#FFFFFF',
                              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                              fontWeight: 500,
                            }}
                          >
                            {project.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                              mb: 2,
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {project.technologies.map((tech, techIndex) => (
                              <Typography
                                key={techIndex}
                                sx={{
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                  fontSize: '0.75rem',
                                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                  px: 1,
                                  py: 0.5,
                                  borderRadius: 1,
                                  '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                  },
                                }}
                              >
                                {tech}
                              </Typography>
                            ))}
                          </Box>
                        </CardContent>
                        <CardActions>
                          <Button
                            startIcon={<GitHub />}
                            href={project.link}
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
                            View on GitHub
                          </Button>
                        </CardActions>
                      </Card>
                    </motion.div>
                  </MuiGrid>
                ))}
              </MuiGrid>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </SectionWrapper>
  );
};

export default Projects; 