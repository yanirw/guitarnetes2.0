import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.paper',
        pt: 8,
        pb: 14,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
              mb: 4,
            }}
          >
            Hi, I'm Yanir Winnik
          </Typography>
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              mb: 4,
            }}
          >
            DevOps Engineer
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              textAlign: { xs: 'center', md: 'left' },
              mb: 6,
            }}
          >
            Specializing in cloud infrastructure, Kubernetes, and CI/CD automation
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://www.linkedin.com/in/yanir-winnik-84a7501bb/"
              target="_blank"
              startIcon={<LinkedIn />}
            >
              Connect on LinkedIn
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="https://github.com/yanirw"
              target="_blank"
              startIcon={<GitHub />}
            >
              View GitHub
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 