import {Container, Typography } from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { Filter } from './components/Filter';
import { Pagination } from './components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function App(props) {

  const instanceToDo = axios.create({
    baseURL: "https://todo-api-learning.herokuapp.com"
})
  const apiUrl = '/v1/tasks/2';
  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [sortByDone, setSortByDone] = useState(''); 
  const [sortByDate, setSortByDate] = useState('later');
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  const [checkTodos, setCheckTodos] = useState([])
  
  const handleSubmit = (inputValue) => {
    if(inputValue.trim() !== '') {
      setToDos(prev => [{
        name: inputValue, 
        createdAt: new Date(), 
        done: false,
        uuid: uuidv4()}, 
        ...prev]);
    };
  };

//  date

  const getTodos = useCallback(async () => {
    const getData = await instanceToDo.get('/v1/tasks/2', {
      params: {
        filterBy: sortByDone,
        order: (sortByDate === 'later') ? 'asc' : 'desc'
      }
    });
    setCheckTodos(...getData.data);
    const checkData = (getData.data);
    setToDos(checkData)
    setFilteredToDos(checkData)
    console.log('filteredToDos ', filteredToDos)
    console.log('toDos ', toDos)
    console.log('checkData ', checkData)
  })

  useEffect(() => {
    getTodos()
  }, [sortByDone, sortByDate])

  useEffect(() => {
    setFilteredToDos (toDos) 
  }, [toDos, sortByDone, sortByDate]);

  const handleDelete = (itemId) => {
    setToDos(prev => prev.filter(item => item.uuid !== itemId));
  };

  const handleTodoEdit = (uuid, inputValue) => {
    const newTodos = [...toDos];
    const index = newTodos.findIndex(toDos => toDos.uuid === uuid);
    newTodos[index].name = inputValue;
    setToDos(newTodos);
  }

  // const handleDone = (uuid) => {
  //   const newTodos = [...toDos];
  //   const index = newTodos.findIndex(toDos => toDos.uuid === uuid);
  //   newTodos[index].done = ((newTodos[index].done === false) ? true : false);
  //   setToDos(newTodos);
  // };

  

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredToDos.slice(indexOfFirstTodo, indexOfLastTodo);

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
      {(filteredToDos.length > 5) && 
        <Pagination 
          todosPerPage={todosPerPage}
          totalTodos={filteredToDos.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
      <ToDosList align='center' 
        handleDelete={handleDelete}
        handleDone={handleDone}
        currentTodos={currentTodos}
        handleTodoEdit={handleTodoEdit}
      />
    </Container>
  );
};

export default App;