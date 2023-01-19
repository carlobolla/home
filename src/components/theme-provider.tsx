import React, { useEffect, useState } from "react";
import { ThemeContext } from ".";
import useMediaQuery from "../hooks/useMediaQuery";

export function ThemeProvider(props: any) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'auto');
    const isTheme = useMediaQuery('(prefers-color-scheme: dark)')
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if(theme === 'auto'){
            document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    }, [theme, isTheme]);
    return <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>{props.children}</ThemeContext.Provider>;
}