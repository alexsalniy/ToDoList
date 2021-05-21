import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export function ToDoItems({inputValue}) {

    return(
        <ListItem >
            <ListItemText 
            primary={inputValue.title}
            />
        </ListItem>
    )
}