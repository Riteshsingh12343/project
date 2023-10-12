import React from 'react';
import { useState , useContext} from 'react';
import { Box, TextField, Button, Typography, } from '@mui/material';
import logo from '../assets/logo.png'
import css from './login.css';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom';


const loginInitialValues = {
  username: '',
  password: '',
};

const signupInitialValues = {
  name: '',
  username: '',
  password: '',
};

const Login = () => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState('');
  const {setAccount} = useContext(DataContext);

  const  navigate = useNavigate();

  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError('');
      setSignup(signupInitialValues);
      toggleAccount('login');
    } else {
      setError('Something went wrong! please try again later');
    }
  }

  const onValueChange =(e)=> {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const loginUser = async()=> {
   let response= await API.userLogin(login);
   if(response.isSuccess){
    setError('');

    sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
    sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
   

    setAccount({ name: response.data.name, username: response.data.username });

    navigate('/');
    
   }else{
    setError('Something went wrong! Please try again later');
   }
  }
  return (

    <Box className="Container" >
      <img className='img' src={logo} alt="login" />
      {
        account === 'login' ?
          <Box className='Wrapper'>
            <TextField variant="standard"value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange (e)} name='password' label='Enter Password' />

            { error && <Typography className='error'>(error)</Typography>}
            
            <Button className='LoginButton ' variant="contained" onClick={()=> loginUser()} >Login</Button >
            <Typography className='Typography' style={{ textAlign: 'center' }}>OR</Typography>
            <Button className='SigninButton' onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</Button>
          </Box>
          :
          <Box className="Wrapper">
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Enter Name " />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label= "Enter Username" />
            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
              { error && <Typography className='error'>(error)</Typography>}
            <Button className='SigninButton' onClick={() => signupUser()} >Signup</Button>
            <Typography className='Typography' style={{ textAlign: 'center' }}>OR</Typography>
            <Button className='LoginButton ' variant="contained" onClick={() => toggleSignup()}>Already have an account</Button >
          </Box >
      }
    </Box>

  )
}

export default Login;
