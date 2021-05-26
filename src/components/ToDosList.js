import React from 'react';
import {List} from '@material-ui/core/'
import { ToDoItem } from './ToDoItem';


export function ToDosList({filteredToDos, handleDelete, handleDone}) {
    return(
        <List >
            {filteredToDos.map((todo) => (
                <ToDoItem 
                    key={todo.id}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    todo={todo}
                />
            ))}
        </List>
    )
}