import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuForm from './index';

// Mock ImageUpload component
jest.mock('../ImageUpload', () => ({ onUpload, initialImage }) => (
  <input type="file" data-testid="image-upload" onChange={(e) => onUpload(URL.createObjectURL(e.target.files[0]))} />
));

describe('MenuForm', () => {
  test('renders form with correct fields', () => {
    render(<MenuForm onAddDish={() => {}} />);

    // Check if form fields are present
    expect(screen.getByLabelText(/Dish Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByTestId('image-upload')).toBeInTheDocument();
    expect(screen.getByText(/Add Dish/i)).toBeInTheDocument();
  });

  test('handles input changes and form submission', () => {
    const mockOnAddDish = jest.fn();
    render(<MenuForm onAddDish={mockOnAddDish} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Dish Name/i), { target: { value: 'Test Dish' } });
    fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '9.99' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Delicious!' } });
    fireEvent.change(screen.getByTestId('image-upload'), { target: { files: [new File(['dummy content'], 'example.png', { type: 'image/png' })] } });

    // Click the Add Dish button
    fireEvent.click(screen.getByText(/Add Dish/i));

    // Check if onAddDish was called with correct arguments
    expect(mockOnAddDish).toHaveBeenCalledWith({
      name: 'Test Dish',
      price: 9.99,
      description: 'Delicious!',
      image: expect.stringContaining('blob:')
    });
  });

  test('disables the Add Dish button when fields are empty', () => {
    render(<MenuForm onAddDish={() => {}} />);

    // Check if the Add Dish button is disabled
    expect(screen.getByText(/Add Dish/i)).toBeDisabled();

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Dish Name/i), { target: { value: 'Test Dish' } });
    fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '9.99' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Delicious!' } });
    fireEvent.change(screen.getByTestId('image-upload'), { target: { files: [new File(['dummy content'], 'example.png', { type: 'image/png' })] } });

    // Check if the Add Dish button is enabled
    expect(screen.getByText(/Add Dish/i)).not.toBeDisabled();
  });

  test('pre-fills form fields when editing a dish', () => {
    const editDish = {
      name: 'Edit Dish',
      price: '12.99',
      description: 'Updated description',
      image: 'initial-image-url'
    };

    render(<MenuForm onAddDish={() => {}} editDish={editDish} />);

    // Check if fields are pre-filled
    expect(screen.getByLabelText(/Dish Name/i).value).toBe('Edit Dish');
    expect(screen.getByLabelText(/Price/i).value).toBe('12.99');
    expect(screen.getByLabelText(/Description/i).value).toBe('Updated description');
  });
});
