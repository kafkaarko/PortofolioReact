import React from 'react'
import SplitText from '../reactbits/SplitText'


const HeroSection = () => {
  return (
<>
<div className='flex justify-center items-center text-gray-200 min-h-screen' >
    <div className='flex flex-col items-center gap-5 font-bold md:w-full  '>
<SplitText
  text="Hello everyone!"
  className="text-9xl font-semibold text-center "
  delay={100}
  duration={0.5}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
<SplitText
  text="welcome to my portofolio!!"
  className="text-6xl font-semibold text-center text-linear-to-t "
  delay={50}
  duration={0.10}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
    </div>

</div>
</>
  )
}

export default HeroSection
