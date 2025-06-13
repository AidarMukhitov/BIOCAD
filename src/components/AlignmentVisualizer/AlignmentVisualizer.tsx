import React, { useEffect, useState } from 'react';
import AminoAcid from '../AminoAcid/AminoAcid';
import { AMINO_ACID_COLORS } from '../../utils/constants';
import './AlignmentVisualizer.css';

interface AlignmentVisualizerProps {
  sequence1: string;
  sequence2: string;
}

const AlignmentVisualizer: React.FC<AlignmentVisualizerProps> = ({ sequence1, sequence2 }) => {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection()?.toString();
      if (selection && selection.match(/^[ARNDCQEGHILKMFPSTWYV-]+$/i)) {
        navigator.clipboard.writeText(selection);
        setNotification('Sequence copied to clipboard!');
        setTimeout(() => setNotification(''), 1000);
      }
    };

    document.addEventListener('selectionchange', handleSelection);
    return () => document.removeEventListener('selectionchange', handleSelection);
  }, []);

  return (
    <div className="alignment-container">
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      
      <div className="sequence-row">
        {sequence1.split('').map((aa, i) => (
          <AminoAcid key={`top-${i}`} aa={aa} color={AMINO_ACID_COLORS[aa]} />
        ))}
      </div>
      
      <div className="sequence-row">
        {sequence2.split('').map((aa, i) => (
          <AminoAcid 
            key={`bottom-${i}`} 
            aa={aa} 
            highlight={aa !== sequence1[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default AlignmentVisualizer;