import {CircularProgress, Container, Grid, Typography, Snackbar } from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { Filter } from './components/Filter';
import { Pagination } from './components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import {Alert} from '@material-ui/lab'
import axios from 'axios';
import { Auth } from './container/Auth'
import { Todos } from './container/Todos'

function App() {
  const instanceTodo = axios.create({
    baseURL: "http://localhost:3000"
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
  const [isLogined, setIsLogined] = useState(false)
  const [token, setToken] = ('');

  // const errCatch = (err) => {
  //   setErrorMessage(err.response.data.message);
  //   setErrorStatus(err.response.status);
  //   setErrorAlert(true)
  // }
  
  // const getTodos = useCallback(async () => {
  //   try {
  //     const getData = await instanceTodo.get('/v1/tasks/2', {
  //       params: {
  //         filterBy: sortByDone,
  //         order: sortByDate 
  //       }
  //     });
  //     setToDos(getData.data);
  //     setIsLoaded(true);
  //   } catch (err) {
  //     errCatch(err);
  //   }
  // }, [sortByDone, sortByDate]) // eslint-disable-line

  // useEffect(() => {
  //   getTodos()
  // }, [getTodos])
  
  // const handleSubmit = async (inputValue) => {
  //   try {
  //     if(inputValue.trim() !== '') {
  //       await instanceTodo.post(`/v1/task/2`,
  //         {
  //           'name': inputValue,
  //           'done': false
  //         });
  //       await getTodos();
  //     }
  //   } catch (err) {
  //     errCatch(err);
  //   }
  // };

  // const handleDelete = async (uuid) => {
  //   try {
  //     await instanceTodo.delete(`/v1/task/2/${uuid}`);
  //     await getTodos();
  //   } catch (err) {
  //     errCatch(err);
  //   }
  // }

  // const handleTodoEdit = async (uuid, inputValue, done) => {
  //   try {
  //     await instanceTodo.patch(`/v1/task/2/${uuid}`,
  //       {
  //         'name': inputValue,
  //         'done': done
  //       });
  //     await getTodos();
  //   } catch (err) {
  //     errCatch(err);
  //   }
  // };

  // const handleClose = () => {
  //   setErrorAlert(false);
  // }

  // const indexOfLastTodo = currentPage * todosPerPage;
  // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  // const currentTodos = toDos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <Container maxWidth="sm" >
      {isLogined
        ? <Todos 
          token={token}
          instanceTodo={instanceTodo}/>
        : <Auth
          token={token}
          setToken={setToken}
          setIsLogined={setIsLogined}
          instanceTodo={instanceTodo}/>
      }
    </Container>
  );
};

export default App;