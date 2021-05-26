import { ListItem, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

export function ToDoItem({todo, handleDelete, handleDone}) {
    const date = todo.date.toLocaleString();

    return(
        <ListItem >
            <Checkbox checked={todo.done} 
            value={todo.id}
            color='primary'
            onClick={() => handleDone(todo.id)} />
            <ListItemText 
            primary={todo.title}
            />
            <ListItemText 
            style={{ textAlign: 'right'}}
            secondary={date}
            />
            <IconButton onClick={() => handleDelete(todo.id)}>
                <Delete />
            </IconButton>
        </ListItem>
    )
};