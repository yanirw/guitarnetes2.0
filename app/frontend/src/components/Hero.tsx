import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GitHub, LinkedIn, Description } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #4B0082 0%, #FF6B6B 50%, #1a472a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlay */}
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ maxWidth: '800px' }}>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontWeight: 600,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 2,
                textShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              Hi, <br />
              I'm Yanir Winnik
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontWeight: 500,
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 4,
                textShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              DevOps Engineer
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                href="https://www.linkedin.com/in/yanir-winnik-84a7501bb/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                href="https://github.com/yanirw"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<Description />}
                href="/yanir_winnik_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(5px)',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                CV
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 