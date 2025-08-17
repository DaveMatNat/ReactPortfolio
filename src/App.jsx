import { useState } from 'react'
// import DiscordNav from './components/DiscordNav'
import Header from './components/Header'
import Body from './components/Body'
import Hero from './components/Hero'
import Story from './components/Story'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  // Data & Info

  return (
    <div className="text-slate-900 min-h-screen relative text-sm sm:text-base">
      <Header />
      <Body>
        <Hero />
        <Story />
        <Projects />
      </Body>
      <Footer />
    </div>
  )
}

export default App