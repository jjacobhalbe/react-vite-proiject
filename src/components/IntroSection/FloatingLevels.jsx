import React, { useEffect, useRef, useState } from 'react'
import './intro.css'

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', '?']
const COUNT = 100
const RADIUS = 25
const GRAVITY = 25

const FloatingLevels = ({ isExiting }) => {
  const containerRef = useRef(null)
  const circlesRef = useRef([])
  const [, setTick] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    if (!circlesRef.current.length) {
      circlesRef.current = Array.from({ length: COUNT }).map(() => ({
        x: Math.random() * (width - 2 * RADIUS) + RADIUS,
        y: Math.random() * (height - 2 * RADIUS) + RADIUS,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        label: levels[Math.floor(Math.random() * levels.length)],
        opacity: 1,
      }))
    }

    if (isExiting) {
      circlesRef.current.forEach((c) => (c.vy = 0))
    }

    let frameId

    const update = () => {
      const circles = circlesRef.current

      if (isExiting) {
        circles.forEach((c) => {
          c.vx = 0
          c.vy += GRAVITY
          c.y += c.vy
        })
      } else {
        // Movement + wall bounce
        circles.forEach((c) => {
          c.x += c.vx
          c.y += c.vy

          if (c.x < RADIUS || c.x > width - RADIUS) c.vx = -c.vx
          if (c.y < RADIUS || c.y > height - RADIUS) c.vy = -c.vy
        })

        // Circle-to-circle soft bouncing
        for (let i = 0; i < circles.length; i++) {
          for (let j = i + 1; j < circles.length; j++) {
            const c1 = circles[i]
            const c2 = circles[j]
            const dx = c2.x - c1.x
            const dy = c2.y - c1.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const minDist = 2 * RADIUS

            if (dist < minDist) {
              // Push them apart
              const overlap = minDist - dist
              const nx = dx / dist
              const ny = dy / dist

              c1.x -= (overlap / 2) * nx
              c1.y -= (overlap / 2) * ny
              c2.x += (overlap / 2) * nx
              c2.y += (overlap / 2) * ny

              // Simple bounce: reverse directions
              c1.vx = -c1.vx
              c1.vy = -c1.vy
              c2.vx = -c2.vx
              c2.vy = -c2.vy
            }
          }
        }
      }

      setTick((t) => t + 1)
      frameId = requestAnimationFrame(update)
    }

    frameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameId)
  }, [isExiting])

  return (
    <div className="floating-container" ref={containerRef}>
      {circlesRef.current.map((circle, idx) => (
        <div
          key={idx}
          className="floating-level"
          style={{
            transform: `translate(${circle.x - RADIUS}px, ${
              circle.y - RADIUS
            }px)`,
            opacity: circle.opacity,
            transition: isExiting
              ? 'opacity 1.2s linear, transform 1.2s ease-in'
              : 'none',
          }}
        >
          {circle.label}
        </div>
      ))}
    </div>
  )
}

export default FloatingLevels
