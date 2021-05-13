import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div className='homeHeader'>
      <Link to="/Site">Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Process'>Process</Link>
      <Link to='/Gallery'>Gallery</Link>
    </div>
  )
}
