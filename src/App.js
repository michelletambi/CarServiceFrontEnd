import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import CarFilter from "./components/CarFilter";
import {BrowserRouter as Router,Route, Routes,Switch,Link, BrowserRouter} from "react-router-dom";
import BasketContainer from "./containers/BasketContainer";
import LogInContainer from "./containers/LogInContainer";


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<HomeContainer />} />
            <Route path="/LogIn" element={<LogInContainer />} />
            <Route path="/Basket" element={<BasketContainer />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
