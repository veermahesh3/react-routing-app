import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css';
const Navbar = () => {
  return (
    <>
    <nav>
    <NavLink exact activeClassName="active_class" to="/">About US</NavLink>
    <NavLink exact activeClassName="active_class" to="/contact">Contact US</NavLink>
    <NavLink exact activeClassName="active_class" to="/contact/name">Name</NavLink>
    </nav>
    </>
  )
}
// changes done in navbar

export default Navbar