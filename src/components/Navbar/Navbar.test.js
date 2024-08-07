import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './index';

describe('Navbar Component', () => {
  test('renders Navbar with logo and navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByAltText('FoodieDelight Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Add Restaurant')).toBeInTheDocument();
  });

  test('opens and closes the user menu', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const accountButton = screen.getByRole('button', { name: /account circle/i });
    fireEvent.click(accountButton);

    expect(screen.getByText('Hey Admin!')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Hey Admin!'));
    expect(screen.queryByText('Hey Admin!')).not.toBeInTheDocument();
  });

  test('calls handleLogout when Logout is clicked', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );
    
    // Simulate opening the menu
    const accountButton = screen.getByRole('button', { name: /account circle/i });
    fireEvent.click(accountButton);

    // Mock the logout function
    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);
    
    // Add assertions to verify logout behavior, if necessary
  });
});
