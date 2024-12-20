import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}

          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt="title" 
            className='w-16 h-16 object-contain'
          />
          <h3
            className='text-white textt-[20px] font-bold text-center'
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a versatile software developer with a primary focus on machine
        learning. With a robust background in developing and deploying machine
        learning models, I excel at leveraging data to solve complex problems
        and create intelligent systems. My expertise extends to web development,
        automation, and databases, where I build dynamic, user-friendly
        applications and streamline workflows. I thrive in collaborative
        settings, delivering scalable and innovative solutions. Let's work
        together to harness the power of machine learning, automation, and data
        management to bring your visionary ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, 'about') 