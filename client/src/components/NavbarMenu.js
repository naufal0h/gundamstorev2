import React from 'react'
import { Link } from 'react-router-dom'

function NavbarMenu() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">Gundam Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/items">Gundam</Link>
        <Link className="nav-link" to="/brands">Brand</Link>
        <Link className="nav-link" to="/">Total</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavbarMenu