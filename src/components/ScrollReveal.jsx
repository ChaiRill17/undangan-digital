import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
}

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export function ScrollReveal({ children, variant = 'up', className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const v = variant === 'left' ? slideLeft : variant === 'right' ? slideRight : variant === 'scale' ? scaleIn : slideUp

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={v}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
