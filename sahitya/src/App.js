import React from 'react';
import app from './App.css'
import {BrowserRouter , Route, Routes} from 'react-router-dom';

import DataProvider from './context/DataProvider';
// components

import Login from './Components/login/Login'
import Home from './Components/home/Home';
import Header from './Components/header/Header';




function App() {
  return (
      <DataProvider >
        <BrowserRouter>
        <Header />
        <div style={{marginTop:64 }}> 
        <Routes>
           <Route path='/login' element={<Login />} />
           <Route path ='/' element ={<Home/>} />
        </Routes>
        </div>
        </BrowserRouter>
      </DataProvider>
   
  );
}

export default App;
