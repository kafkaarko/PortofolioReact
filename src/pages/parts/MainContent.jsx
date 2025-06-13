import React from 'react'
import FadeContent from '../reactbits/FadeContent'
import PixelTransition from '../reactbits/PixelTransatrion'
import Magnet from '../reactbits/magnte'

const MainContent = () => {
  return (
    <div className="hero bg-transparent min-h-screen" id='about'>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="hero-content text-center grid text-black px-4">
          <h1 className="text-5xl text-center mb-8">About me</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <PixelTransition
                firstContent={
                  <img
                    src="./public/kafka.jpg"
                    alt="kafka arko ardissy!"
                    className=" object-cover rounded-xl"
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111"
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>it's me kafka!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
            <div className="flex flex-col items-center justify-between w-full md:w-1/2">
              <p className="w-full text-base md:text-lg font-semibold text-center">
                Hi, I'm <span className="text-blue-200">Kafka Arko Ardissya</span> — a passionate junior web developer on a journey to master the art of <span className="text-yellow-200">backend development</span>.<br /><br />
                I find joy in solving complex problems, building powerful APIs, and bringing logic to life through code. My goal? To grow into a professional who not only builds systems but also crafts experiences behind the scenes.<br /><br />
                Curious to know more or want to collaborate? Follow my journey through the links below!
              </p>
              <div className="flex flex-row gap-5 mt-10">
                <Magnet padding={50} disabled={false} magnetStrength={20}>
                  <a href="https://github.com/kafkaarko" className='link link-hover'><img src="./public/github.png" alt="" width={50} /></a>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={20}>
                  <a href="https://www.linkedin.com/in/kafka-arko-ardissya-141a33304/" className='link link-hover'><img src="./public/linkedin.png" alt="" width={50} /></a>
                </Magnet>
                <Magnet padding={50} disabled={false} magnetStrength={20}>
                  <a href="https://www.instagram.com/kafka.svg/" className='link link-hover'><img src="./public/ig.png" alt="" width={50} /></a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  )
}

export default MainContent