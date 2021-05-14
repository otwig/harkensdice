import React from 'react'
import "../css/BurgerNav.css"
import { Link } from "react-router-dom"


const BurgerNav = (props) => {
  return (
    <div className="BurgerNav">
      <nav className="Menu">
        <li onClick={props.handleModal}><Link to="/">Home</Link></li>
        <li onClick={props.handleModal}><Link to='/About'>About</Link></li>
        <li onClick={props.handleModal}><Link to='/Process'>Process</Link></li>
        <li><a href="https://www.etsy.com/shop/harkensdice">Shop</a></li>
        <li onClick={props.handleModal}><Link to='/Gallery'>Gallery</Link></li>
      </nav>
    </div>
  )
}

export default BurgerNav
