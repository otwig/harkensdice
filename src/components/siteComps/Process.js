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

      <div className="text">
        <h3>How It's Made</h3>
        <p>Harkens Dice are made with a variety of tools including 3D printed dice masters from <a href="https://www.etsy.com/shop/TypeXIII">TypeXIII on Etsy</a>, silicone molds made by our Alchemist-in-Chief, and <a href="https://www.artnglow.com/">Art-n-Glow resin</a>. The neon resins are tinted with handmade alcohol inks, though <a href="https://rangerink.com/collections/tim-holtz-alcohol-inks?gclid=CjwKCAjw-e2EBhAhEiwAJI5jg_d-UBHTe0Tmz_tHUIunS1U18uQlbySSfcZfA9uiEG8p2FO3fZ4YWBoCLE0QAvD_BwE">Ranger Inks</a> are used in some applications. Colorshifting powders, flakes, and glitters have been gathered from a variety of sources. </p>
        <div className="imageContainer">
          <img src="/images/IMG_2431.jpeg" alt="" />
          <img src="/images/IMG_2892.jpeg" alt="" />
        </div>
        <p>Silicone molds were created from the dice masters, which were sanded and polished by hand. Resin is then mixed in two parts; colors and pigments are added depending on the design and poured into the molds. They are placed in a pressure pot to 35 PSI and left to cure for 24 hours at which time, they can be safely demolded. The dice are then trimmed of flashing, left to rest another week for their final cure, and sanded where imperfections remain. They are polished, inked, and photographed before being added to Etsy for purchase. </p>
        <br />

      </div>
    </div>
  )
}
