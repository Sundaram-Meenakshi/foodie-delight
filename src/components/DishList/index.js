import React from 'react';
import { IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Avatar, ListItemAvatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DishList = ({ menu, onDeleteDish, onEditDish }) => {
  return (
    <List>
      {menu.map((dish, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar src={dish.image} alt={dish.name} />
          </ListItemAvatar>
          <ListItemText
            primary={`${dish.name} - $${dish.price.toFixed(2)}`}
            secondary={dish.description}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => onEditDish(index)}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => onDeleteDish(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default DishList;
