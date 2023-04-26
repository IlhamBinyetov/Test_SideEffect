import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () =>{},
    onLogin: (email, password) =>{}
});

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedin] = useState(false);

    useEffect( () =>{
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if(storedUserLoggedInInformation === '1'){
          setIsLoggedin(true);
        }
      },[]);

    const logOutHandler = () =>{
        localStorage.removeItem('isLoggedIn');
        setIsLoggedin(false);
        
    }
    const loginHandler = () =>{
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedin(true);
    }

    return(
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logOutHandler,
            onLogin: loginHandler    
        }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;