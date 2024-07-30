'use client'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
      },
    }),
  }

  const { ref, inView } = useInView({ threshold: 0.5 })
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection('Skills')
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <h2 className='text-3xl font-medium capitalize mb-8'>My skills</h2>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, i) => (
          <motion.li
            key={i}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
