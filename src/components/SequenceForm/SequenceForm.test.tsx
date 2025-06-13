import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SequenceForm from './SequenceForm';
export {};

describe('SequenceForm Component', () => {
  it('renders correctly', () => {
    render(<SequenceForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText('First Amino Acid Sequence')).toBeInTheDocument();
    expect(screen.getByLabelText('Second Amino Acid Sequence')).toBeInTheDocument();
  });

  it('validates amino acid characters', async () => {
    const onSubmit = jest.fn();
    render(<SequenceForm onSubmit={onSubmit} />);
    
    const input1 = screen.getByLabelText('First Amino Acid Sequence');
    fireEvent.change(input1, { target: { value: 'ABC123' } });
    
    expect(await screen.findByText(/Contains invalid characters/i)).toBeInTheDocument();
  });
});