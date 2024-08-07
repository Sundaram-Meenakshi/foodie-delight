import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRestaurant from './pages/AddRestaurant';
import EditRestaurant from './pages/EditRestaurant';
import RestaurantDetails from './pages/RestaurantDetails';
import RestaurantListPage from './pages/RestaurantListPage';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<RestaurantListPage />} />
            <Route path="/add" element={<AddRestaurant />} />
            <Route path="/edit/:id" element={<EditRestaurant />} />
            <Route path="/details/:id" element={<RestaurantDetails />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
