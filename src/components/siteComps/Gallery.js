import React from 'react'
import '../css/Gallery.css'
import SiteHeader from './SiteHeader.js'
import SiteNav from '../SiteNav.js'
import Footer from '../Footer.js'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className='Gallery'>
      <SiteNav />
      <SiteHeader />

      <div className="Text">
        <h3>Dice Gallery</h3>
      </div>
      <div className="galleries">
        <div className='largeGallery'>
          <h4>Astral Winds</h4>
          <div className='diceLarge'>
            <img src='/images/astralwinds/IMG_6808.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
          </ div>
        </div> */}
        </div>


        <div className='largeGallery'>
          <h4>Midnight Blue Jelly</h4>
          <div className='diceLarge'>
            <img src='/images/blue jelly/IMG_7863.jpg' />
          </ div>
          {/* <div className='smallGallery'>
    <div className='diceSmall'>
      <img src='/images/astralwinds/IMG_6800.jpg' />
    </ div>
    <div className='diceSmall'>
      <img src='/images/astralwinds/IMG_6820.jpg' />
    </ div>
    <div className='diceSmall'>
      <img src='/images/astralwinds/IMG_6822.jpg' />
</ div> */}
        </div>

        <div className='largeGallery'>
          <h4>Pact of the Tequila Sunrise</h4>
          <div className='diceLarge'>
            <img src='/images/IMG_7024.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
      </ div> */}
        </div>


        <div className='largeGallery'>
          <h4>Curacao Coast</h4>
          <div className='diceLarge'>
            <img src='/images/IMG_7026.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
      </ div> */}
        </div>

        <div className='largeGallery'>
          <h4>Eladrin Riches</h4>
          <div className='diceLarge'>
            <img src='/images/IMG_6880.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
      </ div> */}
        </div>


        <div className='largeGallery'>
          <h4>Green Plume</h4>
          <div className='diceLarge'>
            <img src='/images/IMG_8089.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
      </ div> */}
        </div>

        <div className='largeGallery'>
          <h4>Alchemist's Fire</h4>
          <div className='diceLarge'>
            <img src='/images/IMG_8159.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
      </ div> */}
        </div>
        <div className='largeGallery'>
          <h4>Eldritch Vibes in Black Ink</h4>
          <div className='diceLarge'>
            <img src='/images/IMG_8059.jpg' />
          </ div>
          {/* <div className='smallGallery'>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6800.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6820.jpg' />
          </ div>
          <div className='diceSmall'>
            <img src='/images/astralwinds/IMG_6822.jpg' />
      </ div> */}
        </div>
      </div>
      <Footer />
    </div >
  )
}
