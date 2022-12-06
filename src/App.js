import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { Login } from './Login';
import { SignUp} from './SignUp';
import { Game } from './Game';
import { Home } from './Home'
import { ProtectedRoute } from './ProtectedRoute';


export const App = () => {

return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<SignUp/>}></Route>
      <Route path='game' element={
      <ProtectedRoute>
          <Game/>
      </ProtectedRoute>}>
      </Route>
    </Routes>
   </BrowserRouter>
    );
}
