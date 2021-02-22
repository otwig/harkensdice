import React from 'react'
import Site from './Site.js'
import Contact from './Contact.js'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Home() {
  return (
    <div className='home'>
  
      <div className="buttonBox">
        <button> <a href="https://www.etsy.com/shop/harkensdice">Shop</a> </button>
        <button><Link to="/Site">Site</Link></button>
        <button><a href="https://www.instagram.com/harkensdice/">Instagram</a></button>
        <button><a href="https://ko-fi.com/harkensdice">Ko-Fi</a></button>
      </div>
     
    </div>
  )
}

export default Home
