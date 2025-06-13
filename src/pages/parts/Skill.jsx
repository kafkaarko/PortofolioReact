import React from 'react'
import SpotlightCard from '../reactbits/SpoligtCard'
import BlurText from '../reactbits/BlurText'
import AnimatedContent from '../reactbits/AnimatedContent'

const Skill = () => {
    
  return (
    <>
    <AnimatedContent
  distance={150}
  direction="vertical"
  reverse={false}
  duration={1.0}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>

<div className="flex flex-col items-center flex-wrap gap-4 md:gap-4  justify-center text-3xl font-bold text-gray-200 mb-8 " id='skill'>
    <h1 className="text-4xl mb-10">My Skills</h1>
    <div className="flex flex-row gap-4 items-center justify-center text-black flex-wrap ">
    <SpotlightCard className="custom-spotlight-card w-full sm:w-64 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex flex-col items-center justify-center h-full">
            <img src="./public/react.svg" width={190} alt="ReactJs" className='h-32 object-contain'/>
            <h2 className="text-2xl font-bold mt-4">Reactjs</h2>
        </div>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card w-64 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex flex-col items-center justify-center h-full">
            <img src="./public/laravell.svg" width={190} alt="Laravel" className='h-32 object-contain' />
            <h2 className="text-2xl font-bold mt-4">Laravel</h2>
        </div>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card w-64 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex flex-col items-center justify-center h-full">
            <img src="./public/mysql.svg" width={190} alt="mySql" className='h-32 object-contain'/>
            <h2 className="text-2xl font-bold mt-4">mySql</h2>
        </div>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card w-64 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex flex-col items-center justify-center h-full">
            <img src="./public/pgsql.svg" width={190} alt="PostgreeSQL" className='h-32 object-contain' />
            <h2 className="text-2xl font-bold mt-4">PostgreSQL</h2>
        </div>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card w-64 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex flex-col items-center justify-center h-full">
            <img src="./public/mongoDB.svg" width={190} alt="PostgreeSQL"  className='h-32 object-contain'/>
            <h2 className="text-2xl font-bold mt-4">mongoSQL</h2>
        </div>
</SpotlightCard>
    <SpotlightCard className="custom-spotlight-card w-64 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0, 229, 255, 0.2)">
        <div className="flex flex-col items-center justify-center h-full">
            <img src="./public/py.svg" width={190} alt="PostgreeSQL"className='h-32 object-contain' />
            <h2 className="text-2xl font-bold mt-4">Python</h2>
        </div>
</SpotlightCard>
    </div>
    <div className="flex flex-col items-center justify-center text-3xl font-bold text-gray-200 mb-10 mt-10">
  <h1 className="text-4xl mb-10">My Projects</h1>
  <div className="flex flex-row gap-4 items-center justify-center text-black flex-wrap">
    <SpotlightCard className="w-80 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0,229,255,0.2)">
        <div className="flex flex-col items-center justify-center h-full">
      <img src="./public/lumen.svg" width={150} alt="Project 1" className="rounded-xl mb-4 h-32 object-contain" />
      </div>
      <h2 className="text-xl font-bold">Pet Adoption</h2>
      <p className="text-base font-normal mt-2">In this project, I created an API for animal adoption business logic. </p>
      <a href="https://github.com/kafkaarko/API-LUMEN-pet-adoption" className="text-blue-500 underline mt-2 block">
      <BlurText
  text="View on Github!"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/></a>
    </SpotlightCard>
    <SpotlightCard className="w-80 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0,229,255,0.2)">
        <div className="flex flex-col items-center justify-center h-full">
      <img src="./public/laravell.svg" width={150} alt="Project 1" className="rounded-xl mb-4 h-32 object-contain"/>
      </div>
      <h2 className="text-xl font-bold">Music</h2>
      <p className="text-base font-normal mt-2">This is my first dilaravel CRUD project, you can see it directly. </p>
      <a href="https://github.com/kafkaarko/Music" className="text-blue-500 underline mt-2 block">
      <BlurText
  text="View on Github!"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/></a>
    </SpotlightCard>
    <SpotlightCard className="w-80 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0,229,255,0.2)">
        <div className="flex flex-col items-center justify-center h-full">
      <img src="./public/flutter.svg" width={150} alt="Project 1" className="rounded-xl mb-4 h-32 object-contain"/>
      </div>
      <h2 className="text-xl font-bold">Tiket App</h2>
      <p className="text-base font-normal mt-2">By using the flutter framework I created this ticket app project. </p>
      <a href="https://github.com/kafkaarko/Tiket_app_flutter" className="text-blue-500 underline mt-2 block">
      <BlurText
  text="View on Github!"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-2xl mb-8"
/></a>
    </SpotlightCard>
  </div>
</div>
    <div className="flex flex-col items-center justify-center text-3xl font-bold text-gray-200 mb-10 mt-10">
  <h1 className="text-4xl mb-10">Tools</h1>
  <div className="flex flex-row gap-4 items-center justify-center text-black flex-wrap">
    <SpotlightCard className="w-80 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0,229,255,0.2)">
        <div className="flex flex-col items-center justify-center h-full ">
      <img src="./public/vscode.svg" width={150} alt="Project 1" className="rounded-xl mb-4 h-32 object-contain"/>
      </div>
      <h2 className="text-xl font-bold">Visual Studio Code</h2>
    </SpotlightCard>
    <SpotlightCard className="w-80 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0,229,255,0.2)">
        <div className="flex flex-col items-center justify-center h-full ">
      <img src="./public/Github.svg" width={150} alt="Project 1" className="rounded-xl mb-4 h-32 object-contain"/>
      </div>
      <h2 className="text-xl font-bold">Github</h2>
    </SpotlightCard>
    <SpotlightCard className="w-80 transition-transform hover:scale-105 hover:shadow-2xl duration-300" spotlightColor="rgba(0,229,255,0.2)">
        <div className="flex flex-col items-center justify-center h-full ">
      <img src="./public/Git.svg" width={150} alt="Project 1" className="rounded-xl mb-4 h-32 object-contain"/>
      </div>
      <h2 className="text-xl font-bold">Git</h2>
    </SpotlightCard>

  </div>
  
</div>
    </div>
</AnimatedContent>
    </>
  )
}

export default Skill
