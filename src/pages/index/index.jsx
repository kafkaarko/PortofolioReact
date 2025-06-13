import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../parts/HeroSection'
import MainContent from '../parts/MainContent'
import Skill from '../parts/Skill'
import Last from '../parts/Last'

const Index = () => {
  return (
    <Layout>    
   <HeroSection/>
   <MainContent/>
   <Skill/>
   <Last/>
    </Layout>
  )
}

export default Index
