
import "./DarkMode.css";
import React, {useState} from "react";


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
