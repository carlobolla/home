import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../classes";

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const [themeIcon, setThemeIcon] = useState(theme === 'auto' ? 'bi-circle-half' : (theme === 'dark' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill'));
    useEffect(() => {
        switch(theme){
        case 'light':
            setThemeIcon('bi-brightness-high-fill');
            break;
        case 'dark':
            setThemeIcon('bi-moon-stars-fill');
            break;
        default:
            setThemeIcon('bi-circle-half');
            break;
        }
    }, [theme]);
    return(
        <li className="nav-item dropstart">
            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
            <i className={themeIcon}></i>
            </a>
            <ul className="dropdown-menu">
            <li><a role="button" href="#" onClick={() => setTheme("light")} className={theme === "light" ? "dropdown-item active" : "dropdown-item"}><i className="bi bi-brightness-high-fill"></i> Light</a></li>
            <li><a role="button" href="#" onClick={() => setTheme("dark")} className={theme === "dark" ? "dropdown-item active" : "dropdown-item"}><i className="bi bi-moon-stars-fill"></i> Dark</a></li>
            <li><a role="button" href="#" onClick={() => setTheme("auto")} className={theme === "auto" ? "dropdown-item active" : "dropdown-item"}><i className="bi bi-circle-half"></i> Auto</a></li>
            </ul>
        </li>
    )
}