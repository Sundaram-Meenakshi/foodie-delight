import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantForm from './index';

describe('RestaurantForm Component', () => {
  test('renders form fields and submit button', () => {
    render(<RestaurantForm onSubmit={() => {}} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('handles image upload', async () => {
    const { getByLabelText } = render(<RestaurantForm onSubmit={() => {}} />);
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    const input = getByLabelText('Upload');
    fireEvent.change(input, { target: { files: [file] } });

    // Check if the image upload logic works
    // You might need to mock and check if the image URL is set properly
  });

  test('handles adding and editing dishes', () => {
    const { getByText } = render(<RestaurantForm onSubmit={() => {}} />);
    // Add a new dish
    // Check if the dish is added
    // Edit an existing dish
    // Check if the dish is updated
  });

  test('handles form submission', () => {
    const mockOnSubmit = jest.fn();
    const { getByText } = render(<RestaurantForm onSubmit={mockOnSubmit} />);

    fireEvent.click(getByText('Save'));

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
