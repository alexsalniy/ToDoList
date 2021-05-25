import { ListItem, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

export function ToDoItems({todo, handleDelete, handleComplete}) {

    return(
        <ListItem id={todo.id} >
            <Checkbox checked={StaticRange.checkedA} color='primary'
            onClick={handleComplete} />
            <ListItemText 
            primary={todo.title}
            />
            <ListItemText 
            style={{ textAlign: 'right'}}
            secondary={todo.date}
            />
            <IconButton onClick={() => handleDelete(todo.id)}>
                <Delete />
            </IconButton>
        </ListItem>
    )
}