import React, { useEffect, useRef } from 'react'
import Matter from 'matter-js'
import './intro.css'

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', '?']
const COUNT = 60

const FloatingLevelsPhysics = () => {
  const containerRef = useRef(null)
  const engineRef = useRef(null)
  const bodiesRef = useRef([])

  useEffect(() => {
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const engine = Engine.create()
    engine.world.gravity.y = 0
    engineRef.current = engine

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const render = Render.create({
      element: container,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
    })

    // walls
    const walls = [
      Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }),
      Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }),
      Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }),
      Bodies.rectangle(width + 10, height / 2, 20, height, { isStatic: true }),
    ]
    World.add(engine.world, walls)

    // floating levels
    const bodies = []
    for (let i = 0; i < COUNT; i++) {
      const lvl = levels[Math.floor(Math.random() * levels.length)]
      const radius = 20 + Math.random() * 10
      const body = Bodies.circle(
        Math.random() * (width - 2 * radius) + radius,
        Math.random() * (height - 2 * radius) + radius,
        radius,
        {
          restitution: 1,
          friction: 0,
          frictionAir: 0,
        }
      )
      body.label = lvl
      bodies.push(body)
    }
    World.add(engine.world, bodies)
    bodiesRef.current = bodies

    Matter.Engine.run(engine)
    Matter.Render.run(render)

    const update = () => {
      bodies.forEach((b, idx) => {
        const el = container.children[idx]
        if (el) {
          el.style.transform = `translate(${b.position.x}px, ${b.position.y}px)`
        }
      })
      requestAnimationFrame(update)
    }
    update()

    return () => {
      Matter.Render.stop(render)
      Matter.Engine.clear(engine)
      render.canvas.remove()
      render.textures = {}
    }
  }, [])

  return (
    <div className="floating-levels-container" ref={containerRef}>
      {Array.from({ length: COUNT }).map((_, idx) => (
        <div key={idx} className="floating-level">
          {levels[idx % levels.length]}
        </div>
      ))}
    </div>
  )
}

export default FloatingLevelsPhysics
