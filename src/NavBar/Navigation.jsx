import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
        <li><NavLink to="/projects" className="navbar-link">Projects</NavLink></li>
        <li><NavLink to="/contact" className="navbar-link">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation

