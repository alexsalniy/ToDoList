import { Grid, Container, TextField, Typography, ButtonGroup, Button } from '@material-ui/core/';
import React, {useState} from 'react'

export function Auth({instanceTodo, setIsLogined, setToken, token}) {
  const [form, setForm] = useState({username: '', password:''})
  const [signup, setSignup] = useState(false)
  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  }

  const handleSignup = async (form) => {
    try {
      console.log(form, ` form `)
      await instanceTodo.post(`/signup`, form)
    } catch(err) {
      console.log(err);
    }
  }

  const handleLogin = async (form) => {
    try {
      console.log(form, ` form `)
      const res = await instanceTodo.post(`/login`, form)
      const token = res.data.token;
      localStorage.setItem('token', token);
      console.log(res.data.token)
      console.log(token)
      if(token) {
        setIsLogined(true)
      }
    } catch(err) {
      console.log(err);
    }
  }

  const handleAuthChange = event => {
    setSignup(!signup)
  }

  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
        <Grid>
          <Grid >
            <Typography variant='h3' align='center'
            style={{ float: 'left'}}>Authorisation</Typography>
            <Button variant="contained"
              color={'default'}
              onClick={handleAuthChange}
              style={{margin: 10, float: 'right'}}>
                {signup ? 'Login' : 'Signup'}
            </Button>
          </Grid>
          <form >
            <TextField
              fullWidth
              variant='outlined'
              margin='normal'
              placeholder='Enter your User name'
              id='user name'
              type='text'
              name='username'
              onChange={changeHandler}
            />
            <TextField
              fullWidth
              variant='outlined'
              margin='normal'
              placeholder='Enter your password'
              id='password'
              type='password'
              name='password'
              onChange={changeHandler}
            />
          </form>
        </Grid>
        <Grid container spacing={4} justify="center" style={{padding: 10}}>
          {!signup
            ? <Button variant="contained"
                color={'primary'}
                style={{margin: 10}}
                onClick={event => handleLogin(form)}>
                  Login
              </Button>
            : <Button variant="contained"
                color={'secondary'}
                style={{margin: 10}}
                onClick={event => handleSignup(form)}>
                  Signup
              </Button>
          }
        </Grid>
        
      
    </Container>
  )
}
