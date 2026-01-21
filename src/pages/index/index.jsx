import React from 'react'
import Last from '../parts/Last'
import { HeroSection } from '../parts/HeroSection'
import { AboutSection } from '../parts/MainContent'
import { ExpertiseSection } from '../parts/Skill'


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection/>
      <Last/>
    </main>
  )
}