import React from 'react'
import Burger from './siteComps/Burger.js'
import SiteHeader from './siteComps/SiteHeader.js'
import Footer from './Footer.js'
import Olivia from './siteComps/images/OliviaH.png'
import '../App.css'

export default function Contact() {
  return (
    <div className="Contact">
      <Burger />
      <SiteHeader />
      <div className="Text">
        <h3>Contact Me!</h3>
        <h4>Have a question? Want to get in touch? <em>You can!</em></h4><p>
          Via direct message on <a href="https://www.instagram.com/harkensdice/">Instagram</a>, <a href="https://www.etsy.com/shop/harkensdice">Etsy</a>, or by sending an email to harkensdice@gmail.com!</p>
        <img className="Olivia" src={Olivia} />
      </div>
      <Footer />
    </div >
  )
}
