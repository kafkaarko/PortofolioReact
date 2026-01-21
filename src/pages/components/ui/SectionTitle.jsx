import React from 'react'
import BlurText from '../../reactbits/BlurText.jsx'

export const SectionTitle = ({ children }) => (
 <BlurText 
  text={children} 
  className="
    text-4xl md:text-5xl font-extrabold text-center mb-12
    bg-gradient-to-r from-cyan-400 to-purple-500
    bg-clip-text text-transparent
  "
/>

)
