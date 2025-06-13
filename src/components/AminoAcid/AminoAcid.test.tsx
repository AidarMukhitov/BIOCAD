import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AminoAcid from './AminoAcid';

describe('AminoAcid Component', () => {
  it('renders with default color', () => {
    const { container } = render(<AminoAcid aa="A" />);
    const element = container.firstChild;
    expect(element).toHaveStyle('background-color: #67E4A6');
  });

  it('renders with custom color', () => {
    const { container } = render(<AminoAcid aa="C" />);
    const element = container.firstChild;
    expect(element).toHaveStyle('background-color: #FFEA00');
  });

  it('highlights when prop is true', () => {
    const { container } = render(<AminoAcid aa="A" highlight={true} />);
    const element = container.firstChild;
    expect(element).toHaveStyle('background-color: #ffcccc');
  });
});