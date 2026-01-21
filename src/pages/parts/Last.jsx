import React from 'react'
import Magnet from '../reactbits/Magnet.jsx'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SOCIAL_LINKS } from '../components/data'

const Last = () => (
  <Section className="text-white">

    <Container className="text-center">
      <h2
  className="
    text-4xl md:text-5xl font-extrabold mb-6
    bg-gradient-to-r from-pink-500 to-purple-500
    bg-clip-text text-transparent
  "
>
  Thank You for Visiting!
</h2>

     <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto">

        I appreciate your time exploring my portfolio. If you have any questions, 
        collaboration ideas, or just want to connect, feel free to reach out!
      </p>
      
      <div className="flex justify-center gap-6">
        {SOCIAL_LINKS.map((link) => (
          <Magnet key={link.label}>
           <a
  href={link.href}
  target="_blank"
  rel="noopener noreferrer"
  className="
    px-6 py-3 rounded-xl
    bg-gradient-to-r from-pink-500 to-purple-600
    hover:from-purple-600 hover:to-pink-500
    transition-all duration-300
    shadow-lg hover:shadow-pink-500/30
    inline-flex items-center gap-2
  "
>

              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          </Magnet>
        ))}
      </div>
    </Container>
  </Section>
)

export default Last