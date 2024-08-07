import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageUpload = ({ onUpload }) => {
  const [preview, setPreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setPreview('');
    onUpload(''); // Clear the image URL in the parent component
  };

  return (
    <Box>
      <Button
        variant="contained"
        component="label"
        startIcon={<ImageIcon />}
        sx={{ mb: 2,backgroundColor: '#df6404',
          '&:hover': {
            backgroundColor: '#c44e03', // Slightly darker on hover
          }, }}
      >
        Upload
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </Button>
      {preview && (
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <img
            src={preview}
            alt="Preview"
            style={{
              width: '100%',
              maxHeight: '200px',
              borderRadius: '8px',
              display: 'block',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            <Button
              onClick={handleDelete}
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              sx={{
                position: 'relative',
                zIndex: 10,
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;
