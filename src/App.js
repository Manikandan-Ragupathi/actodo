
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx';
import Landing from './pages/Landing.jsx'
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App()
{ 
  const [user,setuser]=useState([{username:"Mani",password:"123"}])
  return(<div> <BrowserRouter>
    <Routes>  
    <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
    <Route path='/signup' element={<Signup user={user} setuser={setuser}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter></div>)
}


export default App; 
