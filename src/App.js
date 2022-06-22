import './App.css';
import "./Themes.js";
import "./components/DarkMode.css";
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter as Router,Route, Routes,Switch,Link, BrowserRouter} from "react-router-dom";
import BasketContainer from "./containers/BasketContainer";
import LogInContainer from "./containers/LogInContainer";
import WelcomeCustomerContainer from './containers/WelcomeCustomerContainer';
import ProductContainer from './containers/ProductContainer';
import AboutContainer from './containers/AboutContainer';
import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes.js"


function App() {
    

  const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };


  return (
    <body>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <div>
                <button id="darkModeBtn" onClick={() => themeToggler}>Theme Toggler</button>
        </div>
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<HomeContainer />} />
              <Route path="/Products" element={<ProductContainer />}/>
              <Route path="/About" element={<AboutContainer />} />
              <Route path="/LogIn" element={<LogInContainer />} />
              <Route path="/Basket" element={<BasketContainer />} />
              <Route path="/Welcome" element={<WelcomeCustomerContainer />} />
            </Routes>
        </BrowserRouter>
      </div>
      </ThemeProvider>
    </body>
  );
}

export default App;
