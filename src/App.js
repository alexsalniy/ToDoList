import {Container, Typography } from '@material-ui/core/';
import './App.css';
import { ToDosList } from './components/ToDosList';
import ToDoInput from './components/ToDoInput';
import { Filter } from './components/Filter';
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
        handleChange();
    };
  };

  const handleChange = (a, b) => {
    setFilteredToDos(toDos);
    console.log('aaaaaaaaaaaaaaaaaa', filteredToDos);
    console.log('doneButton = ', doneButton);
    console.log('dateSortButton = ', dateSortButton);
    function doneSortFunk() {
      if(doneButton === 1) {
        setFilteredToDos(filteredToDos);
      } else if (doneButton === 2) {
        setFilteredToDos(filteredToDos => filteredToDos.filter(item => item.complete === true));
      } else if (doneButton === 3) {
        setFilteredToDos(filteredToDos => filteredToDos.filter(item => item.complete === false));
      }
    console.log(filteredToDos);
    }
    
    if(dateSortButton === 1) {
      setFilteredToDos(filteredToDos => 
        filteredToDos.sort((a, b) => b.sortDate - a.sortDate));
        doneSortFunk();
        console.log(filteredToDos);
    } else if(dateSortButton === 2) {
      setFilteredToDos(filteredToDos => 
        filteredToDos.sort((a, b) => a.sortDate - b.sortDate));
        doneSortFunk();
        console.log(filteredToDos);
    }
  };

  const handleDelete = (itemId) => {
    setToDos(prev => prev.filter(item => item.id !== itemId));
  };

  const handleComplete = (id) => {
    const newTodos = [...toDos];
    const index = newTodos.findIndex(toDos => toDos.id === id);
    console.log(newTodos[index].id);
    newTodos[index].done = ((newTodos[index].done === false) ? true : false);
    setToDos(newTodos);
  };


  console.log(toDos);
  console.log(filteredToDos);

  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
      <ToDoInput handleSubmit={handleSubmit} />
      <Filter 
      handleChange={handleChange}
      doneButton={doneButton}
      setDoneButton={setDoneButton}
      dateSortButton={dateSortButton}
      setDateSortButton={setDateSortButton}
      />
      <ToDosList align='center' 
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      toDos={toDos}/>
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