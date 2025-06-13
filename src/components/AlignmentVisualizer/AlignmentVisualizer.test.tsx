import React from 'react';
import { render } from '@testing-library/react';
import AlignmentVisualizer from './AlignmentVisualizer';
export {};
describe('AlignmentVisualizer', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AlignmentVisualizer 
        sequence1="ACD" 
        sequence2="ACD" 
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('highlights differences', () => {
    const { container } = render(
      <AlignmentVisualizer 
        sequence1="ACD" 
        sequence2="AXD" 
      />
    );
    const diffElements = container.querySelectorAll('[highlight="true"]');
    expect(diffElements.length).toBe(1);
  });

  
});