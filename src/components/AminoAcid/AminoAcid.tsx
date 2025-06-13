import React from 'react';
import { AMINO_ACID_COLORS } from '../../utils/constants';
import './AminoAcid.css';

interface AminoAcidProps {
  aa: string;
  color?: string;
  highlight?: boolean;
}

const AminoAcid: React.FC<AminoAcidProps> = ({ aa, color, highlight = false }) => {
  const backgroundColor = highlight ? '#ffcccc' : color;
  
  return (
    <span 
      className="amino-acid" 
      style={{ backgroundColor }}
      data-aa={aa}
    >
      {aa}
    </span>
  );
};

export default AminoAcid;
