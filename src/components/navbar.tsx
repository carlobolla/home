import { Link } from "react-router-dom";

export const Navbar = () => {
  
  return(
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Link className="ms-2 navbar-brand d-flex align-items-center" style={{color: '#7F7FD5'}} to="/">
          <img src="/logo.svg" alt="Logo" width="30" height="24" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
