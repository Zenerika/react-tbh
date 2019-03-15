import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../styles/img/tbh-logo-wh-hires.png"

const Navbar = () => {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
    
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={Logo} alt="Logo"/>
      </Link>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons" id="btnLogout">
          <Link to="/logout" className="button is-primary">
            Log Out
          </Link>
        </div>
      </div>
    </div>
    
  </nav>
  )
}

export default Navbar
