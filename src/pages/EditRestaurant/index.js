import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantForm from '../../components/RestaurantForm';
import { getRestaurantById, updateRestaurant } from '../../services/mockApi';
import { Box, Typography, Container } from '@mui/material';

const EditRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurantById(id);
        setRestaurant(data);
      } catch (error) {
        console.error("Failed to fetch restaurant", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleEditRestaurant = async (data) => {
    try {
      await updateRestaurant(id, data);
      navigate('/');
    } catch (error) {
      console.error("Failed to update restaurant", error);
    }
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Edit Restaurant
      </Typography>
      <RestaurantForm onSubmit={handleEditRestaurant} defaultValues={restaurant} />
      </Container>
  );
};

export default EditRestaurant;
