import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Cloud as CloudIcon,
  Build as BuildIcon,
  Hub as HubIcon,
  Terminal as TerminalIcon,
  Timeline as TimelineIcon,
  Speed as SpeedIcon,
  Code as CodeIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import SectionWrapper from './SectionWrapper';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: <CloudIcon fontSize="large" />,
    skills: ['GCP', 'Azure', 'AWS'],
  },
  {
    title: 'CI/CD',
    icon: <TimelineIcon fontSize="large" />,
    skills: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitOps'],
  },
  {
    title: 'Infrastructure as Code',
    icon: <BuildIcon fontSize="large" />,
    skills: ['Terraform', 'Terraform Enterprise'],
  },
  {
    title: 'Container Orchestration',
    icon: <HubIcon fontSize="large" />,
    skills: ['Kubernetes', 'Docker', 'Helm', 'Multi-cluster Management'],
  },
  {
    title: 'Scripting',
    icon: <TerminalIcon fontSize="large" />,
    skills: ['Python', 'Bash', 'PowerShell'],
  },
  {
    title: 'Monitoring & Logging',
    icon: <SpeedIcon fontSize="large" />,
    skills: ['Prometheus', 'Grafana', 'Loki'],
  },
];

const Skills = () => {
  return (
    <SectionWrapper>
      <Box
        id="skills"
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
                Skills & Expertise
              </Typography>

              <Grid container spacing={4}>
                {skillCategories.map((category, index) => (
                  <Grid item xs={12} sm={6} md={4} key={category.title}>
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
                        <Box sx={{ color: '#FFFFFF', mb: 3, opacity: 0.9 }}>
                          {category.icon}
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
                          {category.title}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            justifyContent: 'center',
                          }}
                        >
                          {category.skills.map((skill) => (
                            <Typography
                              key={skill}
                              sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                fontSize: '0.9rem',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                padding: '4px 12px',
                                borderRadius: '16px',
                                '&:hover': {
                                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                },
                              }}
                            >
                              {skill}
                            </Typography>
                          ))}
                        </Box>
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

export default Skills; 