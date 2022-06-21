import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import CarFilter from "./components/CarFilter";



function App() {
  return (
    
      <div>
      <NavBar />
      <HomeContainer/>
      
      {/* <CarFilter/> */}
    </div>
    
  );
}

export default App;
