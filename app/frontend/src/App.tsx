import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Expertise from './components/Expertise';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Modern blue
      light: '#60a5fa',
      dark: '#2563eb',
    },
    secondary: {
      main: '#ec4899', // Modern pink
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#0f172a', // Dark blue-gray
      paper: '#1e293b', // Slightly lighter blue-gray
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      marginBottom: '1rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '0.5rem',
          padding: '0.75rem 1.5rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Hero />
        <Expertise />
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #4B0082 0%, #FF6B6B 50%, #4CAF50 100%)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
              opacity: 0.1,
              pointerEvents: 'none',
            }
          }}
        >
          <Box
            component="main"
            sx={{
              position: 'relative',
              zIndex: 1,
              '& > *': {
                background: 'transparent',
                boxShadow: 'none',
                border: 'none',
              },
              '& > * > *': {
                background: 'transparent',
                boxShadow: 'none',
                border: 'none',
              }
            }}
          >
            <About />
            <Skills />
            <Articles />
            <Projects />
            <Contact />
          </Box>
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 