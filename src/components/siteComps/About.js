import React from 'react'
import SiteHeader from './SiteHeader.js'
import Home from '../Home.js'
import '../css/About.css'
import { Switch, Route, Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='about'>
      <Home />
      <SiteHeader />

      <div className="text">
        <h3>About Harkens Dice</h3>
        <p>
          Harkens Dice is located in Vermont, USA. It is 
        </p>
      </div>
    </div>
  )
}
