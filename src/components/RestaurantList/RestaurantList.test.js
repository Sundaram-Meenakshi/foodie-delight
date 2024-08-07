import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import RestaurantList from './index';

const mockRestaurants = [
  {
    id: '1',
    name: 'Test Restaurant',
    description: 'A great place to eat.',
    location: 'Test City',
    image: 'test-image-url'
  }
];

const mockOnDelete = jest.fn();

describe('RestaurantList', () => {
  test('renders restaurant data', () => {
    render(
      <MemoryRouter>
        <RestaurantList restaurants={mockRestaurants} onDelete={mockOnDelete} />
      </MemoryRouter>
    );

    // Check if restaurant data is displayed
    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    expect(screen.getByText('A great place to eat.')).toBeInTheDocument();
    expect(screen.getByText('Test City')).toBeInTheDocument();
  });

  test('renders Edit, View, and Delete buttons', () => {
    render(
      <MemoryRouter>
        <RestaurantList restaurants={mockRestaurants} onDelete={mockOnDelete} />
      </MemoryRouter>
    );

    // Check if buttons are present
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('View')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('calls onDelete when Delete button is clicked', () => {
    render(
      <MemoryRouter>
        <RestaurantList restaurants={mockRestaurants} onDelete={mockOnDelete} />
      </MemoryRouter>
    );

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});
