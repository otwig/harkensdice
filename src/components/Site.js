import React from 'react'
import SiteHeader from './siteComps/SiteHeader.js'
import { Switch, Route, Link } from 'react-router-dom'

export default function Site() {
  return (
    <div>
      <h1> WEBSITE </h1>
      <SiteHeader />
    </div>
  )
}
