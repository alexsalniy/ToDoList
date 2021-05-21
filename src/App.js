import {Container, Typography, Grid, Button, ButtonGroup} from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { useState } from 'react';

function App(props) {

  const [toDos, setToDos] = useState([]);
  
  const handleSubmit = (inputValue) => {
    if(inputValue !== '') {
      setToDos(prev => [{title: inputValue}, ...prev]);
    }
    
  };

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
              <Button>All</Button>
              <Button>Done</Button>
              <Button>Undone</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <Button>Later</Button>
              <Button>Earlier</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      <ToDosList align='center' 
      toDos={toDos}/>
    </Container>
  );
}

export default App;
