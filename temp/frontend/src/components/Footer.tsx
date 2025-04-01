import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Yanir Winnik. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://www.linkedin.com/in/yanir-winnik-84a7501bb/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="small"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/yanirw"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="small"
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="mailto:hbhr932@gmail.com"
              color="primary"
              size="small"
            >
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 