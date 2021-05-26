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
  const [doneButton, setDoneButton] = useState(1);
  const [dateSortButton, setDateSortButton] = useState(1);
  
  const handleSubmit = (inputValue) => {
    if(inputValue !== '') {
      setToDos(prev => [{
        title: inputValue, 
        date: new Date().toLocaleString(), 
        sortDate: new Date().getTime(),
        done: false,
        id: uuidv4()}, 
        ...prev]);
    };
  };

  useEffect(() => {
    handleSortByDone(); 
    // handleSortByDate();
    console.log('did updated')
    console.log('TODOS',JSON.stringify(filteredToDos, null, 2));
  }, [toDos, doneButton, dateSortButton]);

  

  const handleSortByDone = () => {
    const newTodos = [...toDos]
    if(doneButton === 1) {
      setFilteredToDos(newTodos);
    } else if (doneButton === 2) {
      setFilteredToDos(newTodos.filter((item) => item.done === true));
    } else if (doneButton === 3) {
      setFilteredToDos(newTodos.filter((item) => item.done === false));
    }
    // console.log("FILTER", filteredToDos);
    handleSortByDate()
  };

  const handleSortByDate = () => {
    console.log("ByDate");
    if(dateSortButton === 1) {
      setFilteredToDos(prev => prev.sort((a, b) => b.sortDate - a.sortDate));
    } else if(dateSortButton === 2) {
      setFilteredToDos(prev => prev.sort((a, b) => a.sortDate - b.sortDate));
    }
  };

  const handleDelete = (itemId) => {
    setToDos(prev => prev.filter(item => item.id !== itemId));
  };

  const handleDone = (id) => {
    const newTodos = [...toDos];
    const index = newTodos.findIndex(toDos => toDos.id === id);
    newTodos[index].done = ((newTodos[index].done === false) ? true : false);
    setToDos(newTodos);
  };



  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
      <ToDoInput handleSubmit={handleSubmit} />
      <Filter 
      doneButton={doneButton}
      setDoneButton={setDoneButton}
      dateSortButton={dateSortButton}
      setDateSortButton={setDateSortButton}
      />
      <ToDosList align='center' 
      handleDelete={handleDelete}
      handleDone={handleDone}
      filteredToDos={filteredToDos}/>
      <Pagination />
    </Container>
  );
}

export default App;


    // if(checkSorter === 1) {
    //   handleAll();
    //   console.log(1);
    // } else if(checkSorter === 2) {
    //   handleDone();
    //   console.log(2);
    // } else {
    //   handleUndone();
    //   console.log(3);
    // };