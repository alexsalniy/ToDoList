import React from 'react';
import {List} from '@material-ui/core/'
import { ToDoItem } from './ToDoItem';

export function ToDosList({ toDos, handleTodoEdit, handleDelete, handleDone}) {
    return(
        <List >
            {toDos.map((todo) => (
                <ToDoItem 
                    key={todo.uuid}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleTodoEdit={handleTodoEdit}
                />
            ))}
        </List>
    )
};