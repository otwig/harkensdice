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
        <h3>A process title title title </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed. Leo integer malesuada nunc vel risus commodo viverra maecenas. Pretium lectus quam id leo in. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Felis eget velit aliquet sagittis id. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vel pharetra vel turpis nunc eget lorem. Turpis in eu mi bibendum neque. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Fermentum leo vel orci porta non. Non curabitur gravida arcu ac. Justo nec ultrices dui sapien eget mi proin sed libero. Non nisi est sit amet facilisis.

In vitae turpis massa sed elementum. Bibendum ut tristique et egestas quis ipsum. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Adipiscing tristique risus nec feugiat. Vivamus arcu felis bibendum ut tristique et. Interdum consectetur libero id faucibus nisl. Risus pretium quam vulputate dignissim. Scelerisque felis imperdiet proin fermentum leo. Pellentesque diam volutpat commodo sed egestas egestas. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Semper eget duis at tellus at urna condimentum mattis pellentesque. Pretium viverra suspendisse potenti nullam ac tortor vitae. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Sapien eget mi proin sed libero enim sed faucibus turpis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Mauris augue neque gravida in fermentum. Vestibulum lectus mauris ultrices eros in cursus. Venenatis lectus magna fringilla urna porttitor. Euismod lacinia at quis risus sed vulputate odio. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras.</p>
      </div>
    </div>
  )
}
