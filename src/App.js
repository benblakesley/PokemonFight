import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { Login } from './Login';
import { SignUp} from './SignUp';
import { Game } from './Game';
import { Home } from './Home'
import { MustBeLoggedIn} from './MustBeLoggedIn';
import { MustBeLoggedOut } from './MustBeLoggedOut';
import { LeaderboardPage } from './LeaderboardPage';

export const App = () => {

return(
  <BrowserRouter>
    <Routes>
      
      <Route path='/' element={
        <MustBeLoggedOut>
          <Home/>
        </MustBeLoggedOut>}>
        </Route>

      <Route path='login' element={
      <MustBeLoggedOut>
        <Login/>
      </MustBeLoggedOut>}>
      </Route>

      <Route path='signup' element={
        <MustBeLoggedOut>
        <SignUp/>
      </MustBeLoggedOut>}>
      </Route>

      <Route path='game' element={
      <MustBeLoggedIn>
          <Game/>
      </MustBeLoggedIn>}>
      </Route>
      
      <Route path = 'leaderboard' element = {<LeaderboardPage/>}></Route>


    </Routes>
   </BrowserRouter>
    );
}
