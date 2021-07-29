import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainHeader from './Components/MainHeader/MainHeader';

const App=()=> {

  const[isLoggedIn,setIsLoggedIn] =useState(false);

  useEffect(()=>{
const storedUserLoggedInInformation  = localStorage.getItem('isLoggedIn')
if(storedUserLoggedInInformation === 21){
  setIsLoggedIn(true)
}
  },[])


  const loginHandler =(email,password)=>{
 
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler =()=>{
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }
  return (
     <React.Fragment >

       <MainHeader isAuthenticated={isLoggedIn} />
       <main>
       {!isLoggedIn && <Login  onLogin ={loginHandler}/> }
        { isLoggedIn && <Home  onLogout ={logoutHandler}/> }
       </main>
     </React.Fragment>
  );
}

export default App;
