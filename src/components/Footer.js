import React from 'react'
import { Link } from 'react-router-dom'
import './compCSS/footer.css'

export default function Footer() {
  return (
    <div className='footerBox'>

      <a href="https://www.etsy.com/shop/harkensdice">Shop</a>

      <a href="https://ko-fi.com/otwig">Ko-fi</a>

      <a href="https://www.instagram.com/harkensdice/">Instagram</a>

      <Link to='Contact'>Contact</Link>


    </div>
  )
}
