import React,{useContext} from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./Components/Store/auth-context";


const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ctx = useContext(AuthContext);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInformation === 21) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, 
    //   onLogout: logoutHandler }}
    // >
    <React.Fragment>
    <MainHeader />
    <main>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </main>
  </React.Fragment>
  );
};

export default App;
