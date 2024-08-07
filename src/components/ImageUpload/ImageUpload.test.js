import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageUpload from './index';

// Mock FileReader
global.FileReader = class {
  readAsDataURL(file) {
    this.result = 'data:image/png;base64,dummy';
    this.onloadend();
  }
};

describe('ImageUpload', () => {
  test('renders upload button', () => {
    render(<ImageUpload onUpload={() => {}} />);

    // Check if upload button is present
    expect(screen.getByText(/Upload/i)).toBeInTheDocument();
  });

  test('handles image upload and preview', () => {
    const mockOnUpload = jest.fn();
    render(<ImageUpload onUpload={mockOnUpload} />);

    // Simulate file input change
    const fileInput = screen.getByLabelText(/Upload/i).querySelector('input[type="file"]');
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['dummy content'], 'example.png', { type: 'image/png' })]
      }
    });

    // Check if the preview image is displayed
    expect(screen.getByAltText(/Preview/i)).toHaveAttribute('src', 'data:image/png;base64,dummy');
    expect(mockOnUpload).toHaveBeenCalledWith('data:image/png;base64,dummy');
  });

  test('handles image deletion', () => {
    const mockOnUpload = jest.fn();
    render(<ImageUpload onUpload={mockOnUpload} />);

    // Simulate file input change to display preview
    const fileInput = screen.getByLabelText(/Upload/i).querySelector('input[type="file"]');
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['dummy content'], 'example.png', { type: 'image/png' })]
      }
    });

    // Ensure the preview is displayed
    expect(screen.getByAltText(/Preview/i)).toBeInTheDocument();

    // Simulate clicking the delete button
    fireEvent.click(screen.getByText(/Delete/i));

    // Check if the preview is removed
    expect(screen.queryByAltText(/Preview/i)).not.toBeInTheDocument();
    expect(mockOnUpload).toHaveBeenCalledWith('');
  });
});
