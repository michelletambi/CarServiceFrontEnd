import './App.css';
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter as Router,Route, Routes,Switch,Link, BrowserRouter} from "react-router-dom";
import BasketContainer from "./containers/BasketContainer";
import WelcomeCustomerContainer from './containers/WelcomeCustomerContainer';
import ProductContainer from './containers/ProductContainer';
import AboutContainer from './containers/AboutContainer';
import React, {useState} from "react";
import './containers/LogIn.css';
import LogInContainer from './containers/LogInContainer';
import ContactContainer from './containers/ContactContainer';
import { createContext } from 'react';
import ReactSwitch from "react-switch";
import CustomerBasket from './components/CustomerBasket';

export const ThemeContext = createContext(null);

function App() {
    

  const [theme, setTheme] = useState("dark");

    const themeToggler = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    };


  return (
    <ThemeContext.Provider value={ {theme, themeToggler}}>
        <div className="App" id={theme}>
        <div className='switch'>Theme
          <ReactSwitch onChange={themeToggler} checked={theme === "dark"}/>
          {theme}</div>
        <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<HomeContainer />} />
              <Route path="/Products" element={<ProductContainer />}/>
              <Route path="/About" element={<AboutContainer />} />
              <Route path="/Contact" element={<ContactContainer />}/>
              <Route path="/Basket" element={<BasketContainer />} /> 
              <Route path="/LogIn" element={<LogInContainer />} />
              <Route path="/WelcomeBack" element={<CustomerBasket />} />
            </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
