import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BlobCursor from '../reactbits/Blob'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-linear-to-bl from-violet-500 to-fuchsia-500">
      <Navbar />
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-6">
        <BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={100}
/>
        {children}  
      </main>
      <Footer />
    </div>
  )
}

export default Layout
