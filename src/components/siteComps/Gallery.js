import React from 'react'
import '../css/Gallery.css'
import SiteHeader from './SiteHeader.js'
import Home from '../Home.js'

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className='gallery'>
      <div className='secretMenu'><Home /><SiteHeader /></div>
      <img src="/images/dice.png" alt="" />
    </div>
  )
}
