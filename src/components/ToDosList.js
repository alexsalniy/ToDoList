import React from 'react';
import {List, ListItem, Checkbox, DeliteIcon, ListItemText} from '@material-ui/core/'
import { ToDoItems } from './ToDoItems';


export function ToDosList({toDos}) {
    console.log(toDos)
    return(
        <List >
            {toDos.map((inputValue) => (
                <ToDoItems 
                    inputValue={inputValue}
                />
            ))}
        </List>
    )
}