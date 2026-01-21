import React from 'react'
import FadeContent from '../reactbits/FadeContent'
import PixelTransition from '../reactbits/PixelTransition.jsx'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'


export const AboutSection = () => (
  <Section className="">
    <Container>
      <FadeContent>
        <PixelTransition
          firstContent={<SectionTitle>About me</SectionTitle>}
          secondContent={
            <h3 className="text-2xl font-semibold text-center mb-8">
              it's me kafka!
            </h3>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="mb-8"
        />
        
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center text-gray-200">
          Hi, I'm <strong>Kafka Arko Ardissya</strong> — a passionate junior web developer 
          on a journey to master the art of backend development. I find joy in solving 
          complex problems, building powerful APIs, and bringing logic to life through code. 
          My goal? To grow into a professional who not only builds systems but also crafts 
          experiences behind the scenes. Curious to know more or want to collaborate? 
          Follow my journey through the links below!
        </p>
      </FadeContent>
    </Container>
  </Section>
)