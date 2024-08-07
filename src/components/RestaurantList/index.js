import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Avatar } from '@mui/material';

const RestaurantList = ({ restaurants, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell>
                <Avatar alt={restaurant.name} src={restaurant.image} />
              </TableCell>
              <TableCell>{restaurant.name}</TableCell>
              <TableCell>{restaurant.description}</TableCell>
              <TableCell>{restaurant.location}</TableCell>
              <TableCell align='center'>
                <Button component={Link} to={`/edit/${restaurant.id}`} color="primary">Edit</Button>
                <Button component={Link} to={`/details/${restaurant.id}`} color="secondary">View</Button>
                <Button onClick={() => onDelete(restaurant.id)} color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantList;
