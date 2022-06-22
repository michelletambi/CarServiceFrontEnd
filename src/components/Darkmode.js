import "../Themes.js";
import "./DarkMode.css";
import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Themes.js";


function DarkMode() {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <div>
                <button id="darkModeBtn" onClick={() => themeToggler}>Theme Toggler</button>
        </div>
    );
}



export default DarkMode;
