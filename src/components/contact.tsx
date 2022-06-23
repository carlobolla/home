import React, { useState } from "react";
import { Contact } from "../classes";

export const ContactInfo = (props: Contact) => {
  const [isHovering, setIsHovering] = useState(false);

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
        borderColor: props.color,
        borderStyle: 'solid',
        borderWidth: '1px',
        color: isHovering ? 'white' : props.color,
        backgroundColor: isHovering ? props.color : 'white',
        transition: 'background-color 100ms, color 100ms'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={'me-1 bi '+props.icon} style={{fontSize: '1.5em'}}></i> <div>{props.text}</div>
    </a>
  )
}