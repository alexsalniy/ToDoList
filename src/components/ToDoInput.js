import { TextField } from "@material-ui/core";
import { useState } from "react";

function ToDoInput({handleSubmit}) {
    const [inputValue, setInputValue] = useState('');
    const handleChange = ({target}) => {
    //    console.log(target.value);
         setInputValue(target.value)
       };
    return (
        <form onSubmit = {event => {
            event.preventDefault()
            handleSubmit(inputValue)
            setInputValue('')
        }}>
                <TextField
                fullWidth
                variant='outlined'
                margin='normal'
                name='ToDo'
                onChange={handleChange} 
                value={inputValue}/> 
         </form>
    );
}

export default ToDoInput;
