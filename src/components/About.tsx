'use client'

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.75 })
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection('About')
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <motion.section
      ref={ref}
      id='about'
      className='sm:mt-44 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      <h2 className='text-3xl font-medium capitalize mb-8'>About me</h2>
      <p className='mb-3'>
        Hello! I&apos;m Anshul Anand, a passionate{' '}
        <span className='font-medium'>full stack web developer</span> with a
        knack for creating dynamic and user-friendly web applications. With a
        solid foundation in both{' '}
        <span className='font-medium'>front-end and back-end technologies</span>
        , I enjoy bringing ideas to life through clean, efficient, and scalable
        code.
      </p>
      <p>
        My <span className='font-medium'>journey</span> into the world of web
        development began with a curiosity for how websites work. This curiosity
        quickly turned into a <span className='font-medium'>passion</span>,
        leading me to dive deep into the realms of{' '}
        <span className='font-medium'>HTML, CSS, and JavaScript.</span> As I
        explored further, I found myself fascinated by the complexities of
        back-end development, mastering languages like{' '}
        <span className='font-medium'>Node.js and Python.</span>
      </p>
    </motion.section>
  )
}

export default About
