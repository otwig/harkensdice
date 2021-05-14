import React from 'react'
import SiteHeader from './siteComps/SiteHeader.js'
import Footer from './Footer.js'
import SiteNav from './SiteNav.js'
import Burger from './siteComps/Burger.js'
import '../App.css';
import { Switch, Route, Link } from 'react-router-dom'

export default function Site() {
  return (
    <div className='Site'>
      <Burger />
      <SiteHeader />
     
      <div className="Text">
      <h3>
        Alchemical Experiments from the Harkens Den
        </h3>
        <p>
          Thank you for visiting! Please take your time to look around at our gallery past sets, learn about our process, or submit concotions at the Lab, a website feature coming soon. If you have questions or comments please send them along to harkensdice@gmail or check us out on Instagram or TikTok!
        </p>
      </div>
      <div className='MainImg'>
        <img src="/images/harkensdice.png" alt="" />
      </div>

      <Footer />
    </div>
  )
}
