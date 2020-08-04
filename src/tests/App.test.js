import React from 'react';
import { render } from '@testing-library/react';
import GenerateLinkForm from '../components/GenerateLinkForm';

test('renders learn react link', () => {
  const { getByText } = render(<GenerateLinkForm />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
