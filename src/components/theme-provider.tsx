import React, { useEffect, useState } from "react";
import { ThemeContext } from "../classes";

const themeReducer = (action: string) => {
    if(action === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches){
         document.documentElement.setAttribute('data-bs-theme', 'dark');
         return 'dark';
    } else {
        document.documentElement.setAttribute('data-bs-theme', action);
        return action;
    }
}

export function ThemeProvider(props: any) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'auto');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if(theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    }, [theme]);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            if(theme === 'auto'){
                if(e.matches){
                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                } else {
                    document.documentElement.setAttribute('data-bs-theme', 'light');
                }
            }
        }
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [theme]);
    return <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>{props.children}</ThemeContext.Provider>;
}