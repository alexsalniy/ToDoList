import React from 'react';
import {List} from '@material-ui/core/'
import { ToDoItems } from './ToDoItems';


export function ToDosList({toDos, handleDelete, handleComplete}) {
    return(
        <List >
            {toDos.map((todo) => (
                <ToDoItems 
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                    todo={todo}
                />
            ))}
        </List>
    )
}