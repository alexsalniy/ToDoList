import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';

export function ToDoItem({toDos, handleTodoEdit, handleDelete, handleDone}) {
    // const date = toDos.createdAt;
    const [toggleEdit, setToggleEdit] = useState(false);
    const [inputValue, setInputValue] = useState(toDos.name);

    const handleKeyPress = (e, uuid) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(inputValue !== '') {
                handleTodoEdit(uuid, inputValue);
                setToggleEdit(false);
            };
        };
        if (e.key === 'Escape') {
            setToggleEdit(false);
            setInputValue(toDos.name);
        };
    };

    return(
        <ListItem >
            <Checkbox checked={toDos.done} 
            value={toDos.uuid}
            color='primary'
            onClick={() => handleDone(toDos.uuid)} />
            {toggleEdit
                ? <TextField 
                    multiline={true}
                    fullWidth
                    variant='outlined'
                    autoFocus={true}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => handleKeyPress(e, toDos.uuid)} 
                  />
                : <ListItemText 
                    style={{overflowWrap: 'break-word'}}
                    primary={toDos.title}
                    multiline={true}
                    onClick={() => setToggleEdit(true)}
                  />}           
            <ListItemText 
            style={{ textAlign: 'right'}}
            // secondary={date}
            />
            <IconButton onClick={() => handleDelete(toDos.uuid)}>
                <Delete />
            </IconButton>
        </ListItem>
    )
};