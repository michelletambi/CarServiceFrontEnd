import './App.css';
import "./components/DarkMode.css";
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter as Router,Route, Routes,Switch,Link, BrowserRouter} from "react-router-dom";
import BasketContainer from "./containers/BasketContainer";
import WelcomeCustomerContainer from './containers/WelcomeCustomerContainer';
import ProductContainer from './containers/ProductContainer';
import AboutContainer from './containers/AboutContainer';
import React, {useState} from "react";
import './containers/LogIn.css';
import CustomerLogin from './components/CustomerLogin';
import LogInContainer from './containers/LogInContainer';
import ContactContainer from './containers/ContactContainer';
import { createContext } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
    

  const [theme, setTheme] = useState("dark");

    const themeToggler = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    };


  return (
    <ThemeContext.Provider value={ {theme, themeToggler}}>
        <div className="App" id={theme}>
        <button id={theme} onClick={themeToggler}>Theme Toggler</button>
        <BrowserRouter>
        <div className='switch'>
          <ReactSwitch onChange={themeToggler} checked={theme === "dark"} />
        </div>
            <Routes>
              <Route path="/" exact element={<HomeContainer />} />
              <Route path="/Products" element={<ProductContainer />}/>
              <Route path="/About" element={<AboutContainer />} />
              <Route path="/Contact" element={<ContactContainer />} />
              <Route path="/LogIn" element={<LogInContainer />} />
              <Route path="/Contact" element={<ContactContainer />} />
              <Route path="/Basket" element={<BasketContainer />} />
              <Route path="/Welcome" element={<WelcomeCustomerContainer />} />
            </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
