import {CircularProgress, Container, Grid, Typography, Snackbar } from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { Filter } from './components/Filter';
import { Pagination } from './components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import {Alert} from '@material-ui/lab'
import axios from 'axios';

function App() {
  const instanceTodo = axios.create({
    baseURL: "https://todo-api-learning.herokuapp.com"
})
  const [toDos, setToDos] = useState([]);
  const [sortByDone, setSortByDone] = useState(''); 
  const [sortByDate, setSortByDate] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const getTodos = useCallback(async () => {
    const getData = await instanceTodo.get('/v1/tasks/2', {
      params: {
        filterBy: sortByDone,
        order: sortByDate 
      }
    });
    // console.log('message')
    setToDos(getData.data);
    setIsLoaded(true);
  })
  
  const handleSubmit = async (inputValue) => {
    await instanceTodo.post(`/v1/task/2`,
      {
        'name': inputValue,
        'done': false
      });
    await getTodos();
  };

  const handleDelete = async (uuid) => {
    await instanceTodo.delete(`/v1/task/2/${uuid}`);
    await getTodos();
  }

  const handleTodoEdit = async (uuid, inputValue, done) => {
    await instanceTodo.patch(`/v1/task/2/${uuid}`,
      {
        'name': inputValue,
        'done': done
      });
    await getTodos();
  };

  // c

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = toDos.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    getTodos()
  }, [sortByDone, sortByDate])

  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
      <ToDoInput handleSubmit={handleSubmit} />
      <Filter 
        sortByDone={sortByDone}
        setSortByDone={setSortByDone}
        sortByDate={sortByDate}
        setSortByDate={setSortByDate}
        setCurrentPage={setCurrentPage}
      />
      {(toDos.length > 5 && isLoaded) &&
        <Pagination 
          todosPerPage={todosPerPage}
          totalTodos={toDos.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
      {isLoaded &&
        <ToDosList align='center' 
          handleDelete={handleDelete}
          currentTodos={currentTodos}
          handleTodoEdit={handleTodoEdit}
        />
      }
      {!isLoaded && 
        <Grid container alignItems='center' direction='column'>
          <Grid item><CircularProgress/></Grid>
        </Grid>
      }
      <Snackbar  austoHideDuration={3000} >
         <Alert severity="error">error</Alert>
      </Snackbar>
    </Container>
  );
};

export default App;