import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page without crash', () => {
  render(<App />);
  const header = screen.getByText(/Top Property & Industry News/i);
  expect(header).toBeInTheDocument();
});
