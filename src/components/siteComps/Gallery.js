import React from 'react'
import SiteHeader from './SiteHeader.js'
import Burger from './Burger.js'
import Footer from '../Footer.js'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className='Gallery'>
      <Burger />
      <SiteHeader />

      <div className="Text">
        <h3>Dice Gallery</h3>
      </div>

      <div className="galleries">
        <div className='largeGallery'>
          <h4>Astral Winds</h4>

          <img src='/images/astralwinds/IMG_6808.jpg' />

        </div>


        <div className='largeGallery'>
          <h4>Midnight Blue Jelly</h4>

          <img src='/images/blue jelly/IMG_7863.jpg' />

        </div>

        <div className='largeGallery'>
          <h4>Pact of the Tequila Sunrise</h4>

          <img src='/images/IMG_7024.jpg' />

        </div>


        <div className='largeGallery'>
          <h4>Curacao Coast</h4>

          <img src='/images/IMG_7026.jpg' />

        </div>

        <div className='largeGallery'>
          <h4>Eladrin Riches</h4>

          <img src='/images/IMG_6880.jpg' />

        </div>


        <div className='largeGallery'>
          <h4>Green Plume</h4>

          <img src='/images/IMG_8089.jpg' />

        </div>

        <div className='largeGallery'>
          <h4>Alchemist's Fire</h4>

          <img src='/images/IMG_8159.jpg' />

        </div>

        <div className='largeGallery'>
          <h4>Eldritch Vibes in Black Ink</h4>

          <img src='/images/IMG_8059.jpg' />

        </div>
      </div>
      <Footer />
    </div >
  )
}
