import {CircularProgress, Container, Grid, Typography, Snackbar, Button } from '@material-ui/core/';
import { ToDosList } from '../components/ToDosList';
import ToDoInput from '../components/ToDoInput';
import { Filter } from '../components/Filter';
import { Pagination } from '../components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import {Alert} from '@material-ui/lab'


export function Todos({instanceTodo, setIsLogined}) {

  const [toDos, setToDos] = useState([]);
  const [sortByDone, setSortByDone] = useState(''); 
  const [sortByDate, setSortByDate] = useState('desc');
  const [page, setPage] = useState(1);
  const [limit, setLimit ] = useState(5);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorStatus, setErrorStatus] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [pagesCount, setPagesCount] = useState('')

  const errCatch = (err) => {
    setErrorMessage(err.response.data.message);
    setErrorStatus(err.response.status);
    setErrorAlert(true)
  }
  
  const getTodos = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      instanceTodo.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const getData = await instanceTodo.get('/tasks', {
        params: {
          sortByDone: sortByDone,
          sortByDate: sortByDate,
          page: page,
          limit: limit  
        }
      });
      setToDos(getData.data.Tasks);
      setLimit(getData.data.limit);
      setPagesCount(getData.data.pagesCount)
      setIsLoaded(true);
      
    } catch (err) {
      errCatch(err);
      const message = err.response.data.message
      if(message === 'Invalid token') {
        localStorage.removeItem('token')
        setIsLogined(false)
      }
    }
  }, [sortByDone, sortByDate, page]) // eslint-disable-line

  useEffect(() => {
    getTodos()
  }, [getTodos])
  
  const handleSubmit = async (inputValue) => {
    try {
      if(inputValue.trim() !== '') {
        await instanceTodo.post(`/task`,
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
      await instanceTodo.delete(`/task/${uuid}`);
      await getTodos();
    } catch (err) {
      errCatch(err);
    }
  }

  const handleTodoEdit = async (uuid, inputValue, done) => {
    try {
      await instanceTodo.patch(`/task/${uuid}`,
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

  const handleLogout = (event) => {
    setIsLogined(false);
  }


  return (
    <Container maxWidth="sm" >
      <Grid>
        <Typography variant='h2' align='center'
        style={{ float: 'left'}}>ToDo</Typography>
        <Button
        variant="contained"
        color={'secondary'}
        style={{ marginTop: 20, float: 'right'}}
        onClick={handleLogout}>
          Logout
        </Button>
      </Grid>
      <ToDoInput handleSubmit={handleSubmit} />
      <Filter 
        sortByDone={sortByDone}
        setSortByDone={setSortByDone}
        sortByDate={sortByDate}
        setSortByDate={setSortByDate}
        setPage={setPage}
      />
      {(pagesCount > 1 && isLoaded) &&
        <Pagination 
          pagesCount={pagesCount}
          totalTodos={toDos.length}
          page={page}
          setPage={setPage}
        />
      }
      {isLoaded &&
        <ToDosList align='center' 
          handleDelete={handleDelete}
          toDos={toDos}
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
           Status: {errorStatus}  {errorMessage}
         </Alert>
      </Snackbar>
    </Container>
  );
};