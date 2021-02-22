import React from 'react'
import About from './About.js'
import Gallery from './Gallery.js'
import Process from './Process.js'
import { Switch, Route, Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div>
      <Link to='/About'>About</Link>
      <Link to='/Process'>Process</Link>
      <Link to='/Gallery'>Gallery</Link>
    </div>
  )
}
