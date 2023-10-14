import {useState} from 'react';

 import {BrowserRouter , Navigate, Outlet, Route, Routes} from 'react-router-dom';

import DataProvider from './context/DataProvider';
// components

import Login from './Components/login/Login';
import Home from './Components/home/Home';
import CreatePost from './Components/create/CreatePost';
 import Header from './Components/header/Header';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {
   const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
   
  
   
      <DataProvider >
        <BrowserRouter>
      
        <div style={{marginTop:64 }}> 
        <Routes>
           <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} /> 


            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path ='/' element ={<Home/>} />
           </Route>
      


           <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path ='/create' element ={<CreatePost/>} />
           </Route>


        </Routes>
        </div>
        </BrowserRouter>
      </DataProvider>
   
   );
}

export default App;
