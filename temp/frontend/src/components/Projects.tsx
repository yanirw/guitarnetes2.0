import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Chip, Button } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native DevOps Demo",
      description: "A demonstration of modern DevOps methodologies applied to a simple 2-microservice application. This project showcases containerization, Kubernetes orchestration, CI/CD pipelines, and monitoring best practices. Currently running on a personal GKE cluster.",
      technologies: ["Kubernetes", "Docker", "GCP", "CI/CD", "Monitoring", "Go", "React"],
      features: [
        "Containerized microservices architecture",
        "Automated CI/CD pipeline with GitHub Actions",
        "Kubernetes deployment with custom configurations",
        "Prometheus & Grafana monitoring stack",
        "Infrastructure as Code using Terraform"
      ],
      github: "https://github.com/yourusername/cloud-native-demo",
      live: "https://demo.yourwebsite.com"
    },
    // Add more projects here
  ];

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Featured Projects
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Exploring the intersection of cloud infrastructure, automation, and modern development practices.
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease-in-out'
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{ mr: 1, mb: 1 }}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Key Features:
                  </Typography>
                  <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <Typography variant="body2" color="text.secondary">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                    >
                      View Source
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Launch />}
                      href={project.live}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 