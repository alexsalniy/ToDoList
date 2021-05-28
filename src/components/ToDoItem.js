import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';

export function ToDoItem({todo, handleTodoEdit, handleDelete }) {
    const date = todo.createdAt;
    const [toggleEdit, setToggleEdit] = useState(false);
    const [inputValue, setInputValue] = useState(todo.name);
    const [done, setDone] = useState(todo.done)

    const handleKeyPress = (e, uuid) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(inputValue !== '') {
                handleTodoEdit(uuid, inputValue, done);
                setToggleEdit(false);
            };
        };
        if (e.key === 'Escape') {
            setToggleEdit(false);
            setInputValue(todo.name);
        };
    };

    const handleClick = () => {
        setToggleEdit(false);
        setInputValue(todo.name);
    }

    const handleDone = (todo) => {
        handleTodoEdit(todo.uuid, inputValue, !todo.done )
    }
    return(
        <ListItem >
            <Checkbox checked={todo.done} 
            value={todo.uuid}
            color='primary'
            onClick={() => handleDone(todo)} />
            {toggleEdit
                ? <TextField 
                    multiline={true}
                    fullWidth
                    variant='outlined'
                    autoFocus={true}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => handleKeyPress(e, todo.uuid)} 
                    onBlur={handleClick}
                  />
                : <ListItemText 
                    style={{overflowWrap: 'break-word'}}
                    primary={todo.name}
                    multiline={true}
                    onClick={() => setToggleEdit(true)}
                  />}           
            <ListItemText 
            style={{ textAlign: 'right'}}
            secondary={date}
            />
            <IconButton onClick={() => handleDelete(todo.uuid)}>
                <Delete />
            </IconButton>
        </ListItem>
    )
};