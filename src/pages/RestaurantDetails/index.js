import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestaurantById } from '../../services/mockApi';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Divider,
  Paper,
  Chip,
  Button
} from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  maxWidth: 300, // Reduce card width
}));

const RestaurantDetails = () => {
  const { id } = useParams();
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

  if (!restaurant) return <div>Loading...</div>;

  return (
    <Container sx={{ mt: 4, mb: 4 }}> {/* Added spacing top and bottom */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {restaurant.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {restaurant.description}
        </Typography>
        <Chip label={restaurant.location} color="primary" sx={{ mb: 2,backgroundColor: '#df6404',
                '&:hover': {
                  backgroundColor: '#c44e03', // Slightly darker on hover
                }, }} />
        <Divider sx={{ mb: 4 }} />
      </Box>
      <Paper sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={restaurant.image}
          alt={restaurant.name}
          sx={{ width: '100%', height: 300, objectFit: 'cover' }}
        />
      </Paper>
      <Typography variant="h5" component="h2" gutterBottom>
        Menus
      </Typography>
      <Grid container spacing={2}>
        {restaurant.menu.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <CardMedia
                component="img"
                alt={item.name}
                height="140" // Reduced card image height
                image={item.image}
                title={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {item.description}
                </Typography>
                <Typography variant="body1" color="textPrimary" sx={{ mb: 1 }}>
                  ${item.price}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" sx={{backgroundColor: '#df6404',
                '&:hover': {
                  backgroundColor: '#c44e03', // Slightly darker on hover
                },}} onClick={() => window.history.back()}>
          Back to List
        </Button>
      </Box>
    </Container>
  );
};

export default RestaurantDetails;
