import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import ImageUpload from '../ImageUpload';

const MenuForm = ({ onAddDish, editDish }) => {
  const [dish, setDish] = useState(editDish ? editDish.name : '');
  const [price, setPrice] = useState(editDish ? editDish.price : '');
  const [description, setDescription] = useState(editDish ? editDish.description : '');
  const [image, setImage] = useState(editDish ? editDish.image : '');

  useEffect(() => {
    if (editDish) {
      setDish(editDish.name);
      setPrice(editDish.price);
      setDescription(editDish.description);
      setImage(editDish.image);
    }
  }, [editDish]);

  const handleAddDish = () => {
    if (dish && price && description && image) {
      onAddDish({ name: dish, price: parseFloat(price), description, image });
      setDish('');
      setPrice('');
      setDescription('');
      setImage('');
    }
  };

  return (
    <Box sx={{ p: 3, borderRadius: '8px', boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>
        {editDish ? 'Edit Dish' : 'Add a New Dish'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size='small'
            label="Dish Name"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size='small'
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            size='small'
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ImageUpload onUpload={setImage} initialImage={image} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleAddDish}
            disabled={!dish || !price || !description || !image}
            sx={{
              backgroundColor: '#df6404',
              '&:hover': {
                backgroundColor: '#c44e03',
              },
              py: 1,
              fontSize: '0.875rem',
              borderRadius: '6px'
            }}
          >
            {editDish ? 'Update Dish' : 'Add Dish'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuForm;
