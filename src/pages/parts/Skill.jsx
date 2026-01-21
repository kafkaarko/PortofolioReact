import React from 'react'
import SpotlightCard from '../reactbits/SpotlightCard.jsx'
import AnimatedContent from '../reactbits/AnimatedContent'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SKILLS, PROJECTS, TOOLS } from '../components/data'

const cardClass = `
  p-6 text-center
  bg-gradient-to-br from-cyan-50/80 to-blue-100/80
  backdrop-blur-md
  border border-blue-200/40
  hover:scale-[1.04]
  hover:shadow-lg
  transition-all duration-300
`;

export const ExpertiseSection = () => (
  <Section className="">
    <Container>

      {/* SKILLS */}
      <SectionTitle>My Skills</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        {SKILLS.map((skill) => (
          <SpotlightCard key={skill} className={cardClass}>
            <AnimatedContent>
              <p className="text-xl text-zinc-700 font-medium">{skill}</p>
            </AnimatedContent>
          </SpotlightCard>
        ))}
      </div>

      {/* PROJECTS */}
      <SectionTitle>My Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {PROJECTS.map((project) => (
          <SpotlightCard key={project.id} className={cardClass}>
            <AnimatedContent>
              <h3 className="text-2xl text-zinc-800 font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-700 mb-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap justify-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm
                               bg-white/70 text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedContent>
          </SpotlightCard>
        ))}
      </div>

      {/* TOOLS */}
      <SectionTitle>Tools</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TOOLS.map((tool) => (
          <SpotlightCard key={tool} className={cardClass}>
            <AnimatedContent>
              <p className="text-lg text-zinc-700 font-medium">{tool}</p>
            </AnimatedContent>
          </SpotlightCard>
        ))}
      </div>

    </Container>
  </Section>
);
