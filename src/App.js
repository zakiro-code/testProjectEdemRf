import React, {useEffect, useState} from "react";
import './styles/App.scss';
import About from "./pages/About";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";
import {AuthContext, CreateTourModalShowContext, FindTourModalShowContext} from "./context/context";
import Footer from "./Components/UI/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isShowModalCreateTour, setIsShowModalCreateTour] = useState(false);
  const [isShowModalFindTour, setIsShowModalFindTour] = useState(false);

  useEffect(() => {
      if (localStorage.getItem('isAuth')) {
          setIsAuth(true) 
      }
  },[]);

  return (
      <FindTourModalShowContext.Provider
          value={{
              isShowModalFindTour: isShowModalFindTour,
              setIsShowModalFindTour: setIsShowModalFindTour,
          }}
      >
          <CreateTourModalShowContext.Provider
            value={{
                isShowModalCreateTour: isShowModalCreateTour,
                setIsShowModalCreateTour: setIsShowModalCreateTour,
            }}
          >
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
          </CreateTourModalShowContext.Provider>
      </FindTourModalShowContext.Provider>
  );
}

export default App;
