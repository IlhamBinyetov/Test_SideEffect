import React, { useState } from 'react';


import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';


import './App.css';

function App() {
const [isLoggedIn, setIsLoggedin] = useState(false);
const loginHandler = () =>{
  setIsLoggedin(true);
}

const logOutHandler = () =>{
  setIsLoggedin(false);
}


  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout = {logOutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logOutHandler} />}
        </main>
    </React.Fragment>
  );
}

export default App;
