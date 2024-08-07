import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Grid, Typography, Paper, Divider } from '@mui/material';
import ImageUpload from '../ImageUpload';
import MenuForm from '../MenuForm';
import DishList from '../DishList';

const RestaurantForm = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues,
  });

  const [editDishIndex, setEditDishIndex] = useState(null);

  const menu = watch('menu');

  const handleImageUpload = (url) => {
    setValue('image', url);
  };

  const handleAddDish = (dish) => {
    if (editDishIndex !== null) {
      const updatedMenu = [...menu];
      updatedMenu[editDishIndex] = dish;
      setValue('menu', updatedMenu);
      setEditDishIndex(null);
    } else {
      setValue('menu', [...menu, dish]);
    }
  };

  const handleEditDish = (index) => {
    setEditDishIndex(index);
  };

  const handleDeleteDish = (index) => {
    const newMenu = menu.filter((_, i) => i !== index);
    setValue('menu', newMenu);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Restaurant Details
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Restaurant Name is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                  size='small'
                  label="Restaurant Name"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  required
                  sx={{ mb: 2 }}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                   size='small'
                  label="Description"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  required
                  sx={{ mb: 2 }}
                />
              )}
            />
            <Controller
              name="location"
              control={control}
              rules={{ required: 'Location is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  fullWidth
                   size='small'
                  label="Location"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  required
                  sx={{ mb: 2 }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Restaurant Image
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Controller
              name="image"
              control={control}
              // rules={{ required: 'Restaurant image is required' }}
              render={({ field }) => (
                <ImageUpload onUpload={handleImageUpload} initialImage={field.value} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Menu
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <MenuForm onAddDish={handleAddDish} editDish={editDishIndex !== null ? menu[editDishIndex] : null} />
          </Grid>
          <Grid item xs={12}>
            <DishList menu={menu} onDeleteDish={handleDeleteDish} onEditDish={handleEditDish} />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3,backgroundColor: '#df6404',
                '&:hover': {
                  backgroundColor: '#c44e03', // Slightly darker on hover
                }, }}>
          Save Restaurant
        </Button>
      </Box>
    </Paper>
  );
};

export default RestaurantForm;
