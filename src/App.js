import React from "react";
import './styles/App.css';
import About from "./pages/About";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <AppRouter />
      </BrowserRouter>
  );
}

export default App;
