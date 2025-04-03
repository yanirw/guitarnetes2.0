import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Work as WorkIcon } from '@mui/icons-material';

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Company A',
    period: '2021 - Present',
    description: 'Led the migration of legacy infrastructure to Kubernetes, resulting in 40% cost reduction and improved scalability. Implemented GitOps practices and automated CI/CD pipelines.',
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'Tech Company B',
    period: '2019 - 2021',
    description: 'Designed and maintained multi-cloud infrastructure using Terraform. Implemented monitoring solutions with Prometheus and Grafana.',
  },
  {
    title: 'DevOps Engineer',
    company: 'Tech Company C',
    period: '2017 - 2019',
    description: 'Automated deployment processes using Jenkins and Docker. Managed AWS infrastructure and implemented security best practices.',
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #4B0082 0%, #FF6B6B 50%, #4CAF50 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
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
              Professional Experience
            </Typography>

            <Timeline position="alternate">
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot 
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <WorkIcon sx={{ color: '#FFFFFF' }} />
                    </TimelineDot>
                    {index !== experiences.length - 1 && (
                      <TimelineConnector sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          backgroundColor: 'rgba(22, 27, 34, 0.7)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: 2,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(22, 27, 34, 0.9)',
                            transform: 'translateY(-4px)',
                            transition: 'all 0.3s ease-in-out',
                          },
                        }}
                      >
                        <Typography 
                          variant="h6"
                          sx={{
                            color: '#FFFFFF',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            fontWeight: 500,
                          }}
                        >
                          {experience.title}
                        </Typography>
                        <Typography 
                          variant="subtitle1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            mb: 1,
                          }}
                        >
                          {experience.company}
                        </Typography>
                        <Typography 
                          variant="caption"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            display: 'block',
                            mb: 2,
                          }}
                        >
                          {experience.period}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            lineHeight: 1.6,
                          }}
                        >
                          {experience.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 