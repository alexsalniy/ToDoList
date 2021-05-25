import { ListItem, ListItemText, Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

export function ToDoItems({todo, handleDelete, handleComplete}) {

    return(
        <ListItem key={todo.id} >
            <Checkbox checked={todo.complete} 
            value={todo.id}
            color='primary'
            onClick={() => handleComplete(todo.id)} />
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