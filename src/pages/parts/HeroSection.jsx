import React from 'react'
import SplitText from '../reactbits/SplitText.jsx'
// import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section.jsx'

export const HeroSection = () => (
  <Section className="min-h-screen flex items-center justify-center
" >
    <Container>
<SplitText
  text="Junior Web Developer"
  className="
    text-6xl md:text-7xl font-extrabold text-center
    bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400
    bg-clip-text text-transparent
    drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]
  "
/>


    </Container>
  </Section>
)
