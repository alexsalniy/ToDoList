import { Container } from '@material-ui/core/';
import './App.css';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from './container/Auth'
import { Todos } from './container/Todos'
import * as jwt from 'jsonwebtoken'

function App() {
  const instanceTodo = axios.create({
    baseURL: "https://todos-mvp.herokuapp.com"
})
  const [isLogined, setIsLogined] = useState(false)
  const checkToken = useCallback(() =>{
    if(localStorage.token) {
      console.log('localStorage.token', localStorage.token);
      console.log('localStorage.token', localStorage.token.split('.')[1]);
      const exp = jwt.decode(localStorage.token)
      console.log('exp', exp);
      exp ? setIsLogined(true) : setIsLogined(false) && localStorage.removeItem('token')
    }
  },[])
  console.log('render')

  // useLayoutEffect(() => {
  //   if(sessionStorage.getItem('token')) {
  //     const exp = jwt.decode(sessionStorage.getItem('token').split(' ')[1])?.exp
  //   Date.now() > exp ? setIsLogined(true) : setIsLogined(false)}
  // })

  useLayoutEffect(() => {
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