import React from 'react'
import SiteHeader from './SiteHeader.js'
import Home from '../Home.js'
import '../css/Process.css'
import { Switch, Route, Link } from 'react-router-dom'

export default function Process() {
  return (
    <div className='process'>
      <Home />
      <SiteHeader />
    </div>
  )
}
