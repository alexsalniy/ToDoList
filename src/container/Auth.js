import { Snackbar, Grid, Container, TextField, Typography, Button } from '@material-ui/core/';
import React, {useState} from 'react'
import {Alert} from '@material-ui/lab'
import { useDispatch } from 'react-redux';
import { toggleLogined } from '../reduxToolkit/authSlice';

export function Auth({instanceTodo, setIsLogined }) {
  const [form, setForm] = useState({username: '', password:''})
  const [authToggle, setAuthToggle] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorStatus, setErrorStatus] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()
  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value })
  }
  
  const errCatch = (err) => {
    setErrorMessage(err.response.data.message);
    setErrorStatus(err.response.status);
    setErrorAlert(true)
  }

  const handleClose = () => {
    setErrorAlert(false);
  }

  const handleSignup = async (form) => {
    try {
      await instanceTodo.post(`/signup`, form)
      handleLogin(form)
    } catch(err) {
      errCatch(err);
    }
  }

  const handleLogin = async (form) => {
    try {
      const res = await instanceTodo.post(`/login`, form)
      const token = res.data.token;
      localStorage.setItem('token', token);
      if(token) {
        dispatch(toggleLogined())
      }
    } catch(err) {
      errCatch(err);
    }
  }


  const handleAuthChange = event => {
    setAuthToggle(!authToggle)
  }

  return (
    <Container maxWidth="sm" >
      <Typography variant='h2' align='center'>ToDo</Typography>
      <Grid>
        <Grid >
          <Typography variant='h3' align='center'
          style={{ float: 'left'}}>Authorization</Typography>
          <Button variant="contained"
            color={'default'}
            onClick={handleAuthChange}
            style={{margin: 10, float: 'right'}}>
              {authToggle ? 'Login' : 'Signup'}
          </Button>
        </Grid>
        <form onSubmit = {event => {
          event.preventDefault()
          }}>
          <TextField
            fullWidth
            variant='outlined'
            margin='normal'
            placeholder='Enter your User name'
            id='user name'
            type='text'
            name='username'
            onChange={changeHandler}
            value={form.username}
          />
          <TextField
            fullWidth
            variant='outlined'
            margin='normal'
            placeholder='Enter your password'
            id='password'
            type='password'
            name='password'
            autoComplete='on'
            onChange={changeHandler}
            value={form.password}
          />
          <Grid container spacing={4} justify="center" style={{padding: 10}}>
            {!authToggle
              ? <Button 
                  variant="contained"
                  type='submit'
                  color={'primary'}
                  style={{margin: 10}}
                  onClick={event => handleLogin(form)}>
                    Login
                </Button>
              : <Button
                  type='submit'
                  variant="contained"
                  color={'secondary'}
                  style={{margin: 10}}
                  onClick={event => handleSignup(form)}>
                    Signup
                </Button>
            }
          </Grid>
        </form>
      </Grid>
      <Snackbar open={errorAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="error" onClose={handleClose}>
           Status: {errorStatus}  {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}
