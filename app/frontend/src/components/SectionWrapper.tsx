import React from 'react';
import { Box } from '@mui/material';

interface SectionWrapperProps {
  children: React.ReactNode;
  isFirst?: boolean;
}

const SectionWrapper = ({ children, isFirst = false }: SectionWrapperProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default SectionWrapper; 