import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./";

const ThemeSwitcher = () => {
    const LIGHT_ICON = "bi bi-brightness-high-fill"
    const DARK_ICON = "bi bi-moon-stars-fill"
    const SYSTEM_ICON = "bi bi-circle-half"
    const {theme, setTheme} = useContext(ThemeContext)
    const [themeIcon, setThemeIcon] = useState(theme === 'auto' ? SYSTEM_ICON : (theme === 'dark' ? DARK_ICON : LIGHT_ICON));
    useEffect(() => {
        switch(theme){
        case 'light':
            setThemeIcon(LIGHT_ICON);
            break;
        case 'dark':
            setThemeIcon(DARK_ICON);
            break;
        default:
            setThemeIcon(SYSTEM_ICON);
            break;
        }
    }, [theme]);
    return(
        <div className="dropstart position-fixed bottom-0 end-0 mb-3 me-3">
            <button className="btn btn-primary py-2 dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown"><i className={themeIcon} /></button>
            <ul className="dropdown-menu m-0" data-bs-offset={[100, 0]}>
                <li><div role="button" onClick={() => setTheme("light")} className={theme === "light" ? "dropdown-item active" : "dropdown-item"}><i className={LIGHT_ICON}></i> Light</div></li>
                <li><div role="button" onClick={() => setTheme("dark")} className={theme === "dark" ? "dropdown-item active" : "dropdown-item"}><i className={DARK_ICON}></i> Dark</div></li>
                <li><div role="button" onClick={() => setTheme("auto")} className={theme === "auto" ? "dropdown-item active" : "dropdown-item"}><i className={SYSTEM_ICON}></i> System</div></li>
            </ul>
        </div>
    )
}

export default ThemeSwitcher