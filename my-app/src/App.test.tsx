import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  await waitFor(() => {
    const emailInput = screen.getByText(/content/i);
    expect(emailInput).toBeInTheDocument();
  });
});
