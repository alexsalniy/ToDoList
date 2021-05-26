import {Container, Typography } from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { Filter } from './components/Filter';
import { Pagination } from './components/Pagination';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App(props) {

  const [toDos, setToDos] = useState([]);
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [sortByDone, setSortByDone] = useState('all'); 
  const [sortByDate, setSortByDate] = useState('later');
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);
  
  const handleSubmit = (inputValue) => {
    if(inputValue !== '') {
      setToDos(prev => [{
        title: inputValue, 
        date: new Date(), 
        done: false,
        id: uuidv4()}, 
        ...prev]);
    };
  };

  useEffect(() => {
    const newTodos = [...toDos];
    switch (sortByDone) {
      case 'all':  
        setFilteredToDos(newTodos);
        break;
      case 'done':
        setFilteredToDos(newTodos.filter((item) => item.done === true));
        break;
      case 'undone':
        setFilteredToDos(newTodos.filter((item) => item.done === false));
        break;
    };

    if(sortByDate === 'later') {
      return setFilteredToDos(prev => prev.sort((a, b) => b.date.getTime() - a.date.getTime()));
    };  
    setFilteredToDos(prev => prev.sort((a, b) => a.date.getTime() - b.date.getTime()));
  }, [toDos, sortByDone, sortByDate]);

  const handleDelete = (itemId) => {
    setToDos(prev => prev.filter(item => item.id !== itemId));
  };

  const handleDone = (id) => {
    const newTodos = [...toDos];
    const index = newTodos.findIndex(toDos => toDos.id === id);
    newTodos[index].done = ((newTodos[index].done === false) ? true : false);
    setToDos(newTodos);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredToDos.slice(indexOfFirstTodo, indexOfLastTodo);
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
      <ToDosList align='center' 
        handleDelete={handleDelete}
        handleDone={handleDone}
        currentTodos={currentTodos}
      />
    </Container>
  );
};

export default App;