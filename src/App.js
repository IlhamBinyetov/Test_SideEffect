import React, { useState, useEffect } from 'react';


import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AuthContext from './store/auth-context';
import MainHeader from './Components/MainHeader/MainHeader';


import './App.css';


function App() {

const [isLoggedIn, setIsLoggedin] = useState(false);



useEffect( () =>{
  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  if(storedUserLoggedInInformation === '1'){
    setIsLoggedin(true);
  }
},[]);

const loginHandler = () =>{
  localStorage.setItem('isLoggedIn', '1');
  setIsLoggedin(true);
  
}

const logOutHandler = () =>{
  localStorage.removeItem('isLoggedIn');
  setIsLoggedin(false);
}


  return (
   
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, onLogout:logOutHandler}}>
      <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logOutHandler} />}
        </main>
    </AuthContext.Provider>

  );
}

export default App;
