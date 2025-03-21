import { useState } from 'react'
import './App.css'
import AiDrControlPanel from './components/aidr-control-panel'
import AiDrFeaturesGrid from './components/aidr-features-grid'
import Hero from './components/Hero'
import Navbar from './components/navbar/navbar'
import OurTrustedPartners from './components/our-trusted-partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <OurTrustedPartners/>
      <AiDrFeaturesGrid/>
      <AiDrControlPanel/>
    </>
  )
}

export default App
