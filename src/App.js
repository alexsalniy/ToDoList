import {Container, Typography, Grid, Button, ButtonGroup} from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App(props) {

  const [toDos, setToDos] = useState([]);
  
  const handleSubmit = (inputValue) => {
    if(inputValue !== '') {
      setToDos(prev => [{
        title: inputValue, 
        date: new Date().toLocaleString(), 
        sortDate: new Date().getTime(),
        complete: false,
        id: uuidv4()}, 
        ...prev]);
    }
  };

  const handleSortLater = (a, b) => {
    setToDos(prev => prev.sort((a, b) => b.sortDate - a.sortDate));
    console.log('Later');
    console.log(toDos);
  }

  const handleSortEarlier = (a, b) => {
    setToDos(prev => prev.sort((a, b) => a.sortDate - b.sortDate));
    console.log('Earlier');
    console.log(toDos);
  }

  const handleDelete = (itemId) => {
    setToDos(prev => prev.filter(item => item.id !== itemId));
  };

  const handleAll = (event) => {

  }

  const handleDone = (event) => {

  }

  const handleUndone = (event) => {

  }

  const handleComplete = (inputValue) => {
    ((inputValue.complete === false) ? inputValue.complete = true : inputValue.complete = false);
  }

  console.log(toDos);
  // const saveInput = e => {
  //     setInputValue(saveInput);
  //   };

  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
      <ToDoInput handleSubmit={handleSubmit} />
        <Grid container spacing={4} justify="space-around" >
          <Grid item>
            <ButtonGroup>
              <Button onClick={handleAll}>All</Button>
              <Button onClick={handleDone}>Done</Button>
              <Button onClick={handleUndone}>Undone</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button onClick={handleSortLater}>Later</Button>
              <Button onClick={handleSortEarlier}>Earlier</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      <ToDosList align='center' 
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      toDos={toDos}/>
    </Container>
  );
}

export default App;
