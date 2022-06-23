import React from "react";

interface props {
  text: string,
  className?: string,
  link: string
}

export const Button = (props: props) => {
  return(
    props.link === undefined ? 
    <button className={props.className + ' btn btn-sm btn-outline-primary'}>{props.text}</button> : 
    <a href={props.link} className={props.className + ' btn btn-sm btn-outline-primary'}>{props.text} {props.link.startsWith('/') ? null : <i className='bi bi-box-arrow-up-right'></i>}</a>
  )
}
  