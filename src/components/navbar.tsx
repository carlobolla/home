import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = () => {
  
  return(
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <a className="ms-2 navbar-brand d-flex align-items-center" style={{color: '#7F7FD5'}} href="/">
          <img src="/logo.svg" alt="Logo" width="30" height="24" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <ThemeSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  )
}
