import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

const ImageContainer = ({image, title, descriptionOne, descriptionTwo, color, id, link }) => {
  const control = useAnimation();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else{
      control.start('hidden')
    }
  }, [control, inView]);
  

  const variant = {
    visible: { opacity:1, y:0 ,transition:{duration:1} },
    hidden: { opacity:0, y:100 }
  }
  const pVariant = {
    visible:{opacity:1, transition:{duration:3}},
    hidden:{opacity:0}
  }

  return (
    <div style={{backgroundImage: `url(${image})`}} className='bg-cover bg-center bg-no-repeat' id={id}>
        <motion.div ref={ref} animate={control} variants={variant} initial='hidden' className='flex justify-center items-center mt-2 sm:mt-4 mr-8 pl-4 fade-in' style={{color:`${color}`}}>
            <p className='font-bold text-xl md:text-2xl lg:text-4xl text-center whitespace-nowrap align-center'>{title}</p>
            <div className='border-[1px] h-[3em] sm:h-[5em] ml-6' style={{borderColor:`${color}`}}></div>
            <p className='ml-4 text-[1em] sm:text-lg font-medium'>
                    {descriptionOne}<br/> {descriptionTwo}
            </p>
        </motion.div>
        <motion.p ref={ref} animate={control} variants={pVariant} initial='hidden' className='text-center font-bold mt-2 text-[#ffa500] hover:text-blue-600'><Link to={''}>Más Información <FontAwesomeIcon icon={faArrowRight}/></Link></motion.p>
    </div>
  )
}

export default ImageContainer