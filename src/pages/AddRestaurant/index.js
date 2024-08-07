import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantForm from '../../components/RestaurantForm';
import { createRestaurant } from '../../services/mockApi';
import { Box, Typography, Container } from '@mui/material';

const AddRestaurant = () => {
  const navigate = useNavigate();

  const handleAddRestaurant = async (data) => {
    try {
      await createRestaurant(data);
      navigate('/');
    } catch (error) {
      console.error("Failed to add restaurant", error);
    }
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Add Restaurant
      </Typography>
      <RestaurantForm onSubmit={handleAddRestaurant} defaultValues={{ name: '', description: '', location: '', image: '', menu: [] }} />
    </Container>
  );
};

export default AddRestaurant;
