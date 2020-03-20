import React from 'react';
import { render } from '@testing-library/react';
import Home from "../src/pages/home";

test('renders text in buttons', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Find out more/i);
  expect(linkElement).toBeInTheDocument();
});
