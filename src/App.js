import { Container } from '@material-ui/core/';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from './container/Auth'
import { Todos } from './container/Todos'

function App() {
  const instanceTodo = axios.create({
    baseURL: "https://todos-mvp.herokuapp.com"
})
  const [isLogined, setIsLogined] = useState(false)
  const checkToken = useCallback(() =>{
    if(localStorage.token) setIsLogined(true)
  },[])

  useEffect(() => {
    checkToken()
  }, [checkToken])

  return (
    <Container maxWidth="sm" >
      {isLogined
        ? <Todos 
          instanceTodo={instanceTodo}
          setIsLogined={setIsLogined}/>
        : <Auth
          setIsLogined={setIsLogined}
          instanceTodo={instanceTodo}/>
      }
    </Container>
  );
};
// log
export default App;