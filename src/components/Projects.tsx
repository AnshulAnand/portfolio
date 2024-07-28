'use client'

import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './Project'

export default function Projects() {
  return (
    <section id='projects' className='text-center scroll-mt-28 mb-28'>
      <h2 className='text-3xl font-medium capitalize mb-8'>About me</h2>
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
