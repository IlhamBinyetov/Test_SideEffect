import React, {useContext} from 'react';


import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AuthContext from './store/auth-context';
import MainHeader from './Components/MainHeader/MainHeader';


import './App.css';


function App() {

  const str = useContext(AuthContext);
  return (
   
    <React.Fragment>
      <MainHeader />
          <main>
            {!str.isLoggedIn && <Login />}
            {str.isLoggedIn && <Home/>}
          </main>

    </React.Fragment>
    

  );
}

export default App;
