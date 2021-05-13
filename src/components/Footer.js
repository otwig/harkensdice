import React from 'react'
import '../App.css';
import { Switch, Route, Link } from 'react-router-dom'

export default function Footer() {
  return (

    <div className='footerBox'>

      <a href="https://www.etsy.com/shop/harkensdice">Shop</a>

      <a href="https://www.instagram.com/harkensdice/">Instagram</a>

      {/* <a href="https://ko-fi.com/harkensdice">Ko-fi</a> */}

     <a href="https://www.tiktok.com/@harkensdice?lang=en">TikTok</a>

      <Link to='/Contact'>Contact</Link>


    </div>

  )
}
