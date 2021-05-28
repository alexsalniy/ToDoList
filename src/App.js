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
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorStatus, setErrorStatus] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const errCatch = (err) => {
    setErrorMessage(err.response.data.message);
    console.log(err.response.data.message);
    setErrorStatus(err.response.status);
    console.log(err.response.status);
    setErrorAlert(true)
  }
  
  const getTodos = useCallback(async () => {
    try {
      const getData = await instanceTodo.get('/v1/tasks/2', {
        params: {
          filterBy: sortByDone,
          order: sortByDate 
        }
      });
      // console.log('message')
      setToDos(getData.data);
      setIsLoaded(true);
    } catch (err) {
      errCatch(err);
    }
  }, [sortByDone, sortByDate])
  
  const handleSubmit = async (inputValue) => {
    try {
      if(inputValue.trim() !== '') {
        await instanceTodo.post(`/v1/task/2`,
          {
            'name': inputValue,
            'done': false
          });
        await getTodos();
      }
    } catch (err) {
      errCatch(err);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      await instanceTodo.delete(`/v1/task/2/${uuid}`);
      await getTodos();
    } catch (err) {
      errCatch(err);
    }
  }

  const handleTodoEdit = async (uuid, inputValue, done) => {
    try {
      await instanceTodo.patch(`/v1/task/2/${uuid}`,
        {
          'name': inputValue,
          'done': done
        });
      await getTodos();
    } catch (err) {
      errCatch(err);
    }
  };

  const handleClose = () => {
    setErrorAlert(false);
  }

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
      <Snackbar open={errorAlert} autoHideDuration={3000} onClose={handleClose}>
         <Alert severity="error" onClose={handleClose}>
           { `Status: ${errorStatus}
                Message: ${errorMessage}`}
         </Alert>
      </Snackbar>
    </Container>
  );
};

export default App;