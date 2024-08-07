import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4a154b' }}>
      <Container>
        <Toolbar>
          <Typography sx={{ flexGrow: 1, color: '#fff' }}>
          <img src={logo} alt="FoodieDelight Logo" style={{ height: '40px', marginRight: '16px' }} />
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add" sx={{ mx: 1 }}>
            Add Restaurant
          </Button>
          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ ml: 2 }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Hey Admin!</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
