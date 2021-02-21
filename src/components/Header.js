import React from 'react'
import './compCSS/header.css'
import header from '../images/header.png'

export default function Header() {
  return (
    <div>
      <header>
        <img src={header} alt="" />
      </header>
    </div>
  )
}