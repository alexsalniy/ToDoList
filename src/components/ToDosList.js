import React from 'react';
import {List} from '@material-ui/core/'
import { ToDoItem } from './ToDoItem';


export function ToDosList({filteredToDos, currentTodos, handleDelete, handleDone}) {
    return(
        <List >
            {currentTodos.map((todo) => (
                <ToDoItem 
                    key={todo.id}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    todo={todo}
                />
            ))};
        </List>
    )
};
