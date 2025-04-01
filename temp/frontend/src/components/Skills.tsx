import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: 90 },
        { name: "Azure", level: 85 },
        { name: "AWS", level: 80 }
      ]
    },
    {
      title: "CI/CD & Version Control",
      skills: [
        { name: "GitHub Actions", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "Git", level: 95 },
        { name: "ArgoCD", level: 85 },
        { name: "GitOps", level: 90 }
      ]
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Helm", level: 85 },
        { name: "Docker", level: 95 }
      ]
    },
    {
      title: "Container Orchestration",
      skills: [
        { name: "Kubernetes", level: 90 },
        { name: "GKE", level: 85 }
      ]
    },
    {
      title: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", level: 85 },
        { name: "Grafana", level: 85 },
        { name: "Loki", level: 80 }
      ]
    },
    {
      title: "Scripting & Programming",
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash", level: 90 },
        { name: "PowerShell", level: 80 }
      ]
    }
  ];

  return (
    <Box
      id="skills"
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
            Skills & Expertise
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}
          >
            A comprehensive overview of my technical skills and proficiency levels
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
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
                      p: 4,
                      height: '100%',
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
                    <Typography variant="h6" gutterBottom>
                      {category.title}
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex} sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1">{skill.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: 'grey.200',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                              },
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
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

export default Skills; 