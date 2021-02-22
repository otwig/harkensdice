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
      <div className='gallery'>
        <Gallery />
      </div>
      <div className="text">
        <h3>
          A title
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At imperdiet dui accumsan sit amet nulla facilisi. Varius duis at consectetur lorem donec. Odio facilisis mauris sit amet massa vitae. Semper auctor neque vitae tempus. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Et molestie ac feugiat sed lectus. Enim nunc faucibus a pellentesque sit amet porttitor eget. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Elit sed vulputate mi sit amet. Nisl vel pretium lectus quam id leo in vitae turpis. Convallis convallis tellus id interdum velit laoreet id donec. Diam in arcu cursus euismod quis viverra. Neque gravida in fermentum et sollicitudin. Varius morbi enim nunc faucibus a.

Lectus arcu bibendum at varius vel pharetra vel turpis. Donec et odio pellentesque diam volutpat commodo sed egestas. Massa massa ultricies mi quis hendrerit dolor magna eget. Tincidunt nunc pulvinar sapien et ligula. Massa ultricies mi quis hendrerit dolor magna eget. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. At urna condimentum mattis pellentesque id nibh tortor id aliquet. At risus viverra adipiscing at in tellus. Tincidunt lobortis feugiat vivamus at. Facilisis sed odio morbi quis. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat lacus laoreet non curabitur gravida arcu ac. Libero enim sed faucibus turpis. Ac ut consequat semper viverra nam libero justo laoreet sit. Amet cursus sit amet dictum sit amet justo donec. Malesuada nunc vel risus commodo viverra maecenas. Eget dolor morbi non arcu risus quis. Mollis aliquam ut porttitor leo.
        </p>
      </div>
      <Footer />
    </div>
  )
}
