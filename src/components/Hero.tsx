'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.75 })
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection('Home')
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section
      id='home'
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={'/hero.png'}
              alt='Anshul Anand'
              quality={100}
              width={192}
              height={192}
              priority={true}
              className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className='absolute bottom-0 right-0 text-4xl'
          >
            &#128075;
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I&apos;m Anshul Anand.</span>{' '}
        I&apos;m a <span className='font-bold'>full-stack developer.</span> I
        enjoy building <span>sites & apps</span>. My focus is{' '}
        <span className='underline font-bold'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className='flex flex-col sm:flex-row items-center justify-center text-lg gap-2 px-4 font-medium'
      >
        <Link
          href={'#contact'}
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-95 transition'
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
        </Link>
        <a
          href='/CV.pdf'
          download={true}
          className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-white-950 focus:scale-105 active:scale-95 transition border border-black/10'
        >
          Download CV <HiDownload className='opacity-70' />
        </a>
        <a
          href='https://www.linkedin.com/in/anshulanand02/'
          target='_blank'
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-95 transition border border-black/10'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/AnshulAnand'
          target='_blank'
          className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-95 transition border border-black/10'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
