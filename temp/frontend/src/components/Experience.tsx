import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Discount Bank (Vegvizer)",
      period: "2023 - Present",
      description: [
        "Built, optimized, and maintained GCP and Azure cloud environments to support the Bank's application and database infrastructure, focusing on Kubernetes (GKE), CI/CD, infrastructure automation, and security best practices.",
        "Managed Kubernetes clusters(GKE) and ArgoCD, streamlining multi-cluster application deployments with GitOps best practices.",
        "Developed and maintained CI/CD pipelines using GitHub Actions, improving deployment efficiency and automation.",
        "Created and maintained Terraform modules for Azure and GCP, managing infrastructure across environments with Terraform Enterprise.",
        "Managed Kubernetes application manifests using Helm charts, ensuring environment consistency and streamlined deployment processes.",
        "Enhanced cloud and Kubernetes security by enforcing IAM best practices, network policies, firewall rules, and secret management, while implementing container image scanning and security controls in CI/CD pipelines."
      ]
    },
    {
      title: "DevOps System and Support Engineer",
      company: "Cawamo",
      period: "2023",
      description: [
        "Contributed to the improvement and maintenance of CI/CD pipelines using Jenkins - Automated deployment processes, decreasing the error rate and ensuring consistent deployment environments.",
        "Built cloud infrastructure using IaC in Google Cloud Platform.",
        "Implemented Prometheus and Grafana for real-time system performance monitoring and alerting. Ensuring the reliability, scalability, and performance of mission-critical systems.",
        "IT Support for Edge Devices: Provided Linux system administration, troubleshooting, and maintenance for edge devices running containerized AI workloads, ensuring reliability and performance."
      ]
    }
  ];

  return (
    <Box
      id="experience"
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
            Experience
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}
          >
            My professional journey in DevOps and cloud engineering
          </Typography>

          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
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
                    <Typography variant="h5" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {exp.period}
                    </Typography>
                    <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                      {exp.description.map((item, i) => (
                        <Typography
                          component="li"
                          key={i}
                          variant="body1"
                          sx={{ mb: 1 }}
                        >
                          {item}
                        </Typography>
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

export default Experience; 