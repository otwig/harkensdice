import React from 'react'
import SiteHeader from './siteComps/SiteHeader.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Gallery from './siteComps/Gallery.js'
import './css/Site.css';
import { Switch, Route, Link } from 'react-router-dom'

export default function Site() {
  return (
    <div className='site'>
      <Home />
      <SiteHeader />
      <br />
      <h3 className="text">
        Alchemical Experiments from the Harkens Den
        </h3>
      <div className='gallery'>
        <img src="/images/harkensdice.png" alt="" />
      </div>
      <div className="text">
        <p>
          Thank you for visiting! Please take your time to look around at our gallery past sets, learn about our process, or submit concotions at the lab. If you have questions or comments please send them along to harkensdice@gmail or check us out on Instagram or TikTok!
        </p>
      </div>
      <Footer />
    </div>
  )
}
