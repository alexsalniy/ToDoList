import {Container, Typography, Grid, Button, ButtonGroup} from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App(props) {

  const [toDos, setToDos] = useState([]);
  const [dateSorter, setDateSorter] = useState(1);
  const [checkSorter, setCheckSorter] = useState(1);
  
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

  const handleSortLater = (a, b, event) => {
    if(dateSorter !== 1) {
      setToDos(toDos => toDos.sort((a, b) => a.sortDate - b.sortDate));
      setDateSorter(1);
    }
  }

  const handleSortEarlier = (a, b) => {
    if(dateSorter !== 2) {
      setToDos(toDos => toDos.sort((a, b) => b.sortDate - a.sortDate));
      setDateSorter(2);
    }
  }

  const handleDelete = (itemId) => {
    setToDos(prev => prev.filter(item => item.id !== itemId));
  };

  const handleAll = (event) => {
    if(checkSorter !== 1) {
      setCheckSorter(1);
    }
  }

  const handleDone = (event) => {
    if(checkSorter !== 2) {
      setCheckSorter(2);
    }
  }

  const handleUndone = (event) => {
    if(checkSorter !== 3) {
      setCheckSorter(3);
    }
  }

  const handleComplete = (event) => {
    ((event.target.complete === false) ? 
    event.target.complete = true : 
    event.target.complete = false);
    console.log('ABOBUS');
  };

  console.log(toDos);

  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
      <ToDoInput handleSubmit={handleSubmit} />
        <Grid container spacing={4} justify="space-around" >
          <Grid item>
            <ButtonGroup>
              <Button onClick={handleAll}
              color={(checkSorter === 1) ? 'primary' : 'default'}
              variant={(checkSorter === 1) ? 'contained' : 'outlined'}
              >All</Button>
              <Button onClick={handleDone}
              color={(checkSorter === 2) ? 'primary' : 'default'}
              variant={(checkSorter === 2) ? 'contained' : 'outlined'}
              >Done</Button>
              <Button onClick={handleUndone}
              color={(checkSorter === 3) ? 'primary' : 'default'}
              variant={(checkSorter === 3) ? 'contained' : 'outlined'}
              >Undone</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button onClick={handleSortLater}
              color={(dateSorter === 1) ? 'primary' : 'default'}
              variant={(dateSorter === 1) ? 'contained' : 'outlined'}
              >Later</Button>
              <Button onClick={handleSortEarlier}
              color={(dateSorter === 2) ? 'primary' : 'default'}
              variant={(dateSorter === 2) ? 'contained' : 'outlined'}
              >Earlier</Button>
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
