import React, { useContext, useState } from "react";
import { Contact, ThemeContext } from "../classes";

export const ContactInfo = (props: Contact) => {
  const [isHovering, setIsHovering] = useState(false);
  const {theme} = useContext(ThemeContext);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return(
    <a href={props.link}
      className='btn p-1 rounded-pill justify-content-center align-items-center d-flex'
      style={{ 
        borderColor: (theme === 'light' ? props.color : props.colorDark),
        borderStyle: 'solid',
        borderWidth: '1px',
        color: isHovering ? (theme === 'light' ? "white" : props.textDark) : (theme === 'light' ? props.color : props.colorDark),
        backgroundColor: isHovering ? (theme === 'light' ? props.color : props.colorDark) : '',
        transition: 'background-color 100ms, color 100ms'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={'me-1 bi '+props.icon} style={{fontSize: '1.5em'}}></i> <div>{props.text}</div>
    </a>
  )
}