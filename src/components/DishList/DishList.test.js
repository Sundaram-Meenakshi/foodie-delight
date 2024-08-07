import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DishList from './index';

describe('DishList', () => {
  const mockMenu = [
    {
      name: 'Test Dish',
      price: 9.99,
      description: 'Delicious test dish',
      image: 'test-image-url'
    }
  ];

  const mockOnDeleteDish = jest.fn();
  const mockOnEditDish = jest.fn();

  test('renders dishes correctly', () => {
    render(<DishList menu={mockMenu} onDeleteDish={mockOnDeleteDish} onEditDish={mockOnEditDish} />);

    // Check if the dish name, price, and description are displayed
    expect(screen.getByText(/Test Dish - \$9.99/i)).toBeInTheDocument();
    expect(screen.getByText(/Delicious test dish/i)).toBeInTheDocument();

    // Check if the avatar with the correct image is displayed
    expect(screen.getByAltText(/Test Dish/i)).toHaveAttribute('src', 'test-image-url');
  });

  test('calls onEditDish with correct index when edit button is clicked', () => {
    render(<DishList menu={mockMenu} onDeleteDish={mockOnDeleteDish} onEditDish={mockOnEditDish} />);

    // Click the edit button
    fireEvent.click(screen.getAllByRole('button', { name: /edit/i })[0]);

    // Verify if onEditDish was called with the correct index
    expect(mockOnEditDish).toHaveBeenCalledWith(0);
  });

  test('calls onDeleteDish with correct index when delete button is clicked', () => {
    render(<DishList menu={mockMenu} onDeleteDish={mockOnDeleteDish} onEditDish={mockOnEditDish} />);

    // Click the delete button
    fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[0]);

    // Verify if onDeleteDish was called with the correct index
    expect(mockOnDeleteDish).toHaveBeenCalledWith(0);
  });
});
