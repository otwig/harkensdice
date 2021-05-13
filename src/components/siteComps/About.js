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
          Located in the state of Vermont, Harkens Dice is run by Olivia Hartwig. Olivia has always been a maker; from illustrations in childhood to a ten year career in ceramics and everything in between. With a Bachelor in Fine Arts from Alfred University in Western New York, Olivia specialized in ceramics and storytelling. After graduating they moved to New York City and discovered tabletop role playing games.
        </p>
        <br />
        <p>The glue that holds Olivia's identity together as a maker is alchemy. Dancing along the edge of science and magic, they make objects for daily use that are suffused with curiosity and experimentation. Dice as a mechanism for storytelling is an incredible opportunity to capture the imagination inherent in the games that use them.
        </p>
        <br />
        <p>
          Olivia has been known to play various characters in DnD5e including Chelse Pleaver, a ranger turned grave cleric fire genasi, Yuda the changeling artificer, and most recently Merric McMahon, circle of the shepherd druid barbarian. 
        </p>
        <br />
        <h3>Harkens Dice Collections include:</h3>
        <ul>
          <li>Aurora: clouds of colorshifting pigment suspended in clear resin with flakes</li>
          <li>Plume: clouds of colorshifting pigment suspended in clear resin</li>
          <li>Eldritch Vibes: smokey whisps trapped in neon resin</li>
          <li>Black Foil: an experimental avenue of colorful or clear resins with sprarkle gilded with black foil</li>
        </ul>
      </div>
    </div>
  )
}
