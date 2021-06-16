import { Container } from '@material-ui/core/';
import './App.css';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from './container/Auth'
import { Todos } from './container/Todos'
import * as jwt from 'jsonwebtoken'
import { useSelector } from 'react-redux';
import { selectAuth } from './reduxToolkit/authSlice';

function App() {
  const instanceTodo = axios.create({
    baseURL: "https://todos-mvp.herokuapp.com"
})
  const [isLogined, setIsLogined] = useState(false)
  const log = useSelector(selectAuth)
  console.log(log)
  const checkToken = useCallback(() =>{
    if(localStorage.token) {
      const exp = jwt.decode(localStorage.token)
      exp ? setIsLogined(true) : setIsLogined(false) && localStorage.removeItem('token')
    }
  },[])

  useLayoutEffect(() => {
    checkToken()
  }, [checkToken])

  return (
    <Container maxWidth="sm" >
      {log
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