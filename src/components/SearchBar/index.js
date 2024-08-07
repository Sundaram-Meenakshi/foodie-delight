import React from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Restaurants"
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: 2,
          boxShadow: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
          '& .MuiOutlinedInput-input': {
            padding: '12px 14px',
          },
          '& .MuiInputLabel-root': {
            color: '#6c6c6c',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
