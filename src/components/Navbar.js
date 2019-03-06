import React from 'react'
import Logo from "../styles/img/tbh-logo-wh-hires.png"

const Navbar = () => {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
    
    <div className="navbar-brand">
      <a className="navbar-item" href="home.html">
        <img src={Logo} alt="Logo"/>
      </a>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons" id="btnLogout">
          <a className="button is-primary">
            Log Out
          </a>
        </div>
      </div>
    </div>
    
  </nav>
  )
}

export default Navbar
