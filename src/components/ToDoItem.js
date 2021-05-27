import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';

export function ToDoItem({todo, handleTodoEdit, handleDelete, handleDone}) {
    const date = todo.date.toLocaleString();
    const [toggleEdit, setToggleEdit] = useState(false);
    const [inputValue, setInputValue] = useState(todo.title);

    const handleKeyPress = (e, id) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(inputValue !== '') {
                handleTodoEdit(id, inputValue);
                setToggleEdit(false);
            };
        };
        if (e.key === 'Escape') {
            setToggleEdit(false);
            setInputValue(todo.title);
        };
    };

    return(
        <ListItem >
            <Checkbox checked={todo.done} 
            value={todo.id}
            color='primary'
            onClick={() => handleDone(todo.id)} />
            {toggleEdit
                ? <TextField 
                    multiline={true}
                    fullWidth
                    variant='outlined'
                    autoFocus={true}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => handleKeyPress(e, todo.id)} 
                  />
                : <ListItemText 
                    style={{overflowWrap: 'break-word'}}
                    primary={todo.title}
                    multiline={true}
                    onClick={() => setToggleEdit(true)}
                  />}           
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