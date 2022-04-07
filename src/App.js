import React, {useEffect, useState} from "react";
import './styles/App.scss';
import About from "./pages/About";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context/context";
import Footer from "./Components/UI/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
      if (localStorage.getItem('isAuth')) {
          setIsAuth(true) 
      }
  },[])

  return (
      <AuthContext.Provider
          value={{
              isAuth: isAuth,
              setIsAuth: setIsAuth,
          }}
      >
          <BrowserRouter>
              <Navbar />
              <AppRouter />
              <Footer />
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
