import React from 'react'
import '../App.css';
import Contact from './Contact.js'
import { Switch, Route, Link } from 'react-router-dom'

export default function Footer() {
  return (

    <div className='footerBox'>
      <Link className="ContactLink" to="/Contact">Contact Us</Link>
      <h4>Site built by <a href="http://oliviahartwig.com/">Olivia Hartwig</a></h4>
      <p>Copyright Harkens Dice 2021</p>

    </div>

  )
}
