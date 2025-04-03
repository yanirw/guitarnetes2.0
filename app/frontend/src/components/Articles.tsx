import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { Article as ArticleIcon } from '@mui/icons-material';

const articles = [
  {
    title: 'GCP Workload Identity Federation: From Concept to Implementation',
    publishedAt: 'Feb 2024',
    description: 'A comprehensive guide on implementing GCP Workload Identity Federation, covering the concept, benefits, and step-by-step implementation process for secure cloud authentication.',
    link: 'https://medium.com/@hbhr932/gcp-workload-identity-federation-from-concept-to-implementation-2f4d90551e13'
  }
];

const Articles = () => {
  return (
    <Box
      id="articles"
      sx={{
        py: 12,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(13, 17, 23, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 2,
              p: 6,
              mx: 2,
              transformOrigin: 'center',
              '&:hover': {
                transform: 'scale(1.01)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
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
              Articles
            </Typography>

            <Timeline position="alternate">
              {articles.map((article, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot 
                      sx={{ 
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <ArticleIcon sx={{ color: '#FFFFFF' }} />
                    </TimelineDot>
                    {index !== articles.length - 1 && (
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
                            cursor: 'pointer',
                          },
                        }}
                        onClick={() => window.open(article.link, '_blank')}
                      >
                        <Typography 
                          variant="h6"
                          sx={{
                            color: '#FFFFFF',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            fontWeight: 500,
                          }}
                        >
                          {article.title}
                        </Typography>
                        <Typography 
                          variant="subtitle1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            mb: 1,
                          }}
                        >
                          {article.publishedAt}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                            lineHeight: 1.6,
                          }}
                        >
                          {article.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Articles;
