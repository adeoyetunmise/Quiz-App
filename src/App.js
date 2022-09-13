import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
  <>
  <Routes>
   < Route path='/' element={<Signup/>}/>
   <Route path='/signin' element={<Signin/>}/>
  </Routes>
  
  </>
  );
}

export default App;
