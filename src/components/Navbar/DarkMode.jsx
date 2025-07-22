import React, { useEffect, useState } from 'react'
import darkModeButton from "../../assets/dark-mode-button.webp"
const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;
    console.log(element);

    useEffect(() => {
        if(theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [element.classList, theme])

    return (
        <div>
            <div className="cursor-pointer" style={{width:"70px", height:"30px", overflow:"hidden"}} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {
                    theme === "light" ? 
                    <img className="relative bottom-8" src={darkModeButton} alt="dark mode button" /> :
                    <img className="relative bottom-1" src={darkModeButton} alt="dark mode button" />
                }
            </div>
        </div>
    )
}

export default DarkMode
