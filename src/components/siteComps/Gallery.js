import React from 'react'
import '../css/Gallery.css'
import SiteHeader from './SiteHeader.js'
import Home from '../Home.js'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className='gallery'>
      <div className='secretMenu'>
        <Home />
        <SiteHeader />
      </div>

      <h1>Dice Gallery</h1>

      <div className='largeGallery'>
        <h3>Astral Winds</h3>
        <div className='diceLarge'>
          <img src='/images/astralwinds/IMG_6808.jpg' />
        </ div>
        <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
          </ div>
        </div>
      </div>
      <hr />

      <div className='largeGallery'>
        <h3>Astral Winds</h3>
        <div className='diceLarge'>
          <img src='/images/astralwinds/IMG_6808.jpg' />
        </ div>
        <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
          </ div>
        </div>
      </div>
      <hr />
      
    </div>
  )
}
