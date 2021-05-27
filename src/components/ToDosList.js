import React from 'react';
import {List} from '@material-ui/core/'
import { ToDoItem } from './ToDoItem';


export function ToDosList({ currentTodos, handleTodoEdit, handleDelete, handleDone}) {
    return(
        <List >
            {currentTodos.map((toDos) => (
                <ToDoItem 
                    key={toDos.uuid}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    handleTodoEdit={handleTodoEdit}
                    value={toDos.name}
                />
            ))}
        </List>
    )
};
