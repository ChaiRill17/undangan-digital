import React, { useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import Hero from './components/Hero'
import Bride from './components/Bride'
import Verse from './components/Verse'
import LoveStory from './components/LoveStory'
import WeddingDate from './components/WeddingDate'
import Gallery from './components/Gallery'
import LoveGift from './components/LoveGift'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MusicToggle from './components/MusicToggle'

const BASE = import.meta.env.BASE_URL || '/'

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <OpeningScreen onOpen={() => setOpened(true)} />
      {opened && (
        <div className="pb-20">
          <Hero />
          <Bride />
          <Verse />
          <LoveStory />
          <WeddingDate />
          <Gallery />
          <LoveGift />
          <Footer />
          <Navbar />
          <MusicToggle src={`${BASE}assets/music/pure-love-304010.mp3`} />
        </div>
      )}
    </>
  )
}
