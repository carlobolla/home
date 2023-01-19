import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from ".";

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
        <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Theme <i className={themeIcon}></i></div>
            <ul className="dropdown-menu">
                <li><div role="button" onClick={() => setTheme("light")} className={theme === "light" ? "dropdown-item active" : "dropdown-item"}><i className="bi bi-brightness-high-fill"></i> Light</div></li>
                <li><div role="button" onClick={() => setTheme("dark")} className={theme === "dark" ? "dropdown-item active" : "dropdown-item"}><i className="bi bi-moon-stars-fill"></i> Dark</div></li>
                <li><div role="button" onClick={() => setTheme("auto")} className={theme === "auto" ? "dropdown-item active" : "dropdown-item"}><i className="bi bi-circle-half"></i> Auto</div></li>
            </ul>
        </li>
    )
}