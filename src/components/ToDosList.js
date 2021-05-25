import React from 'react';
import {List} from '@material-ui/core/'
import { ToDoItem } from './ToDoItem';


export function ToDosList({toDos, handleDelete, handleComplete}) {
    return(
        <List >
            {toDos.map((todo) => (
                <ToDoItem 
                    key={todo.id}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                    todo={todo}
                />
            ))}
        </List>
    )
}