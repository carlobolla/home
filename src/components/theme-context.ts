import React from "react";

export const ThemeContext = React.createContext({
    theme: 'auto',
    setTheme: (theme: string) => {}
});