import React from 'react'
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Home() {
  return (
    <div className='Home'>
      <div className="ButtonBox">
        <button> <a href="https://www.etsy.com/shop/harkensdice">Shop</a> </button>
        <button><Link to="/Site">Site</Link></button>
        <button><a href="https://www.instagram.com/harkensdice/">Instagram</a></button>
        <button><a href="https://www.tiktok.com/@harkensdice?lang=en">TikTok</a></button>
      </div>
      <div className='Splash'>
        <img src="/images/dice.png" alt="" />
      </div>
    </div>
    
  )
}

export default Home
