import { useState } from 'react'
// import DiscordNav from './components/DiscordNav'
import Header from './components/Header'
import Body from './components/Body'
import Hero from './components/Hero'
import Story from './components/Story'
import Projects from './components/Projects'
import Footer from './components/Footer'
import WorkExperience from './components/WorkExperience'
import Hire from './components/Hire'

function App() {
  // Data & Info

  const CONTACTS = {
    email: "davematnat@gmail.com", // ← CHANGE ME
    linkedin: "https://www.linkedin.com/in/david-m-nathanson", // ← CHANGE ME
    github: "https://github.com/DaveMatNat",
    resume: "https://drive.google.com/file/d/1UCgCq5OLcHUGbk3QilRHtK9lh2TMp6gU/view?usp=sharing",
    calendly: "https://calendly.com/davematnat/", // ← OPTIONAL
  };

  return (
    <div className="text-slate-900 min-h-screen relative text-sm sm:text-base">
      <Header />
      <Body>
        <Hero CONTACTS={CONTACTS}/>
        <Story />
        <WorkExperience />
        <Projects />
        <Hire CONTACTS={CONTACTS}/>
      </Body>
      <Footer />
    </div>
  )
}

export default App