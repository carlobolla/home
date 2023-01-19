import React, { useContext, useState } from "react";
import { Contact } from "../classes";
import { ThemeContext } from ".";

export const ContactInfo = (props: Contact) => {
  const [isHovering, setIsHovering] = useState(false);
  const {theme} = useContext(ThemeContext);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getActualTheme = (theme: string): string => {
    if(theme === 'auto')
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return theme;
  }
  
  return(
    <a href={props.link}
      className='btn p-1 rounded-pill justify-content-center align-items-center d-flex'
      style={{ 
        borderColor: (getActualTheme(theme) === 'light' ? props.color : props.colorDark),
        borderStyle: 'solid',
        borderWidth: '1px',
        color: isHovering ? (getActualTheme(theme) === 'light' ? "white" : props.textDark) : (getActualTheme(theme) === 'light' ? props.color : props.colorDark),
        backgroundColor: isHovering ? (getActualTheme(theme) === 'light' ? props.color : props.colorDark) : '',
        transition: 'background-color 100ms, color 100ms'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={'me-1 bi '+props.icon} style={{fontSize: '1.5em'}}></i> <div>{props.text}</div>
    </a>
  )
}