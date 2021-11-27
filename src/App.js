import React from 'react'
import Navigation from './components/navigation'
import FirstBody from './components/body'
import Aikins from './components/2body'
import Features from './components/features'
import Testimony from './components/testimonial'
import Footer from './components/footer'
import Contact from './components/contact'
import Video from './components/Video'
import Benefit from './components/benefit'
 
export default function App() {
  return (
    <div class="px-2 py-1 pt-4">
      <Navigation/>
      <FirstBody/>
      <Benefit/>
      <Aikins/>
      <Features/>
      <Testimony/>
      <Contact/>
      <Video/>
      <Footer/>
    </div>
  )
}
