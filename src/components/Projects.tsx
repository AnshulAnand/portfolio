'use client'

import React, { useEffect } from 'react'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 })
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection('Projects')
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id='projects' className='text-center scroll-mt-28 mb-28'>
      <h2 className='text-3xl font-medium capitalize mb-8'>My projects</h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
