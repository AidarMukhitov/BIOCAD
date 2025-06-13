import React, { useState } from 'react';
import SequenceForm from './components/SequenceForm/SequenceForm';
import AlignmentVisualizer from './components/AlignmentVisualizer/AlignmentVisualizer';
import { Box, Typography, Container } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  const [sequences, setSequences] = useState<{ sequence1: string; sequence2: string } | null>(null);

  const handleSubmit = (data: { sequence1: string; sequence2: string }) => {
    setSequences(data);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Amino Acid Sequence Alignment Visualizer
      </Typography>
      
      <Typography variant="body1" paragraph>
        Enter two amino acid sequences of equal length to visualize their alignment.
        Valid characters: A, R, N, D, C, Q, E, G, H, I, L, K, M, F, P, S, T, W, Y, V, -
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <SequenceForm onSubmit={handleSubmit} />
      </Box>
      
      {sequences && (
        <AlignmentVisualizer 
          sequence1={sequences.sequence1} 
          sequence2={sequences.sequence2} 
        />
      )}
    </Container>
  );
};

export default App;
