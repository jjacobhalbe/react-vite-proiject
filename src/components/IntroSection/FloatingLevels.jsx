import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './intro.css'

const levelLabels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

const FloatingLevels = ({ isExiting }) => {
  const floatingElements = useMemo(() => {
    const elements = []
    for (let i = 0; i < 60; i++) {
      elements.push({
        label: levelLabels[i % levelLabels.length],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        floatDuration: 3 + Math.random() * 2,
        floatDelay: Math.random() * 3,
      })
    }
    return elements
  }, [])

  return (
    <div className="floating-container">
      <AnimatePresence>
        {floatingElements.map((item, index) => (
          <motion.div
            key={`floating-${index}`}
            initial={{
              x: item.x,
              y: item.y,
              opacity: 1,
              rotate: 0,
            }}
            animate={
              isExiting
                ? {
                    y: item.y + 300,
                    opacity: 0,
                    rotate: Math.random() * 30 - 15,
                    transition: { duration: 1, ease: 'easeIn' },
                  }
                : {
                    y: [item.y, item.y - 20, item.y],
                    transition: {
                      repeat: Infinity,
                      duration: item.floatDuration,
                      delay: item.floatDelay,
                      ease: 'easeInOut',
                    },
                  }
            }
            exit={{
              y: item.y + 300,
              opacity: 0,
              transition: { duration: 0.8, ease: 'easeIn' },
            }}
            transition={{
              type: isExiting ? 'spring' : 'tween',
              stiffness: 100,
              damping: 15,
              delay: 0, // no delay for falling animation
            }}
            className="floating-level"
          >
            {item.label}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FloatingLevels
