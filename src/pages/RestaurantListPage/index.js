import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRestaurants, deleteRestaurant } from '../../services/mockApi';
import RestaurantList from '../../components/RestaurantList';
import SearchBar from '../../components/SearchBar';
import { Box, Typography, Pagination, Container } from '@mui/material';

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRestaurant(id);
      setRestaurants(restaurants.filter(r => r.id !== id));
    } catch (error) {
      console.error("Failed to delete restaurant", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedRestaurants = filteredRestaurants.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Container sx={{ mt: 4, mb: 4 }}> {/* Added spacing top and bottom */}
      <Typography variant="h5" component="h1" gutterBottom sx={{mb:2}}>
        Restaurants
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <RestaurantList restaurants={paginatedRestaurants} onDelete={handleDelete} />
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(filteredRestaurants.length / pageSize)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default RestaurantListPage;
