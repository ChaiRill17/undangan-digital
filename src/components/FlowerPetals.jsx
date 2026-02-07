import React, { useMemo } from 'react'

const PETAL_COLORS = [
  '#e8c4b8', '#f5dfd6', '#d4a090', '#c9a9a6', '#e8d5d2',
  '#9caa88', '#b8c9a8', '#f9ebe6', '#fefbf7',
]

const PetalSvg = ({ color, style, className = '' }) => (
  <svg
    viewBox="0 0 24 40"
    className={`absolute w-4 h-6 ${className}`}
    style={style}
  >
    <ellipse cx="12" cy="20" rx="10" ry="18" fill={color} opacity="0.9" />
    <path d="M12 2 Q14 18 12 38 Q10 18 12 2" fill={color} opacity="0.7" />
  </svg>
)

const SmallFlowerSvg = ({ color, style, className = '' }) => (
  <svg viewBox="0 0 32 32" className={`absolute w-8 h-8 ${className}`} style={style}>
    <circle cx="16" cy="16" r="4" fill="#fefbf7" />
    {[0, 1, 2, 3, 4].map((i) => (
      <ellipse
        key={i}
        cx="16"
        cy="16"
        rx="4"
        ry="10"
        fill={color}
        opacity="0.85"
        transform={`rotate(${i * 72} 16 16)`}
      />
    ))}
  </svg>
)

export function FallingPetals({ count = 25 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: PETAL_COLORS[i % PETAL_COLORS.length],
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 5,
      size: 0.6 + Math.random() * 0.8,
    }))
  }, [count])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal-fall absolute"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `scale(${p.size})`,
          }}
        >
          <PetalSvg color={p.color} />
        </div>
      ))}
    </div>
  )
}

export function FloatingFlowers({ count = 12 }) {
  const flowers = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: PETAL_COLORS[i % PETAL_COLORS.length],
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 4,
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flowers.map((f) => (
        <div
          key={f.id}
          className="petal-float absolute"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <SmallFlowerSvg color={f.color} />
        </div>
      ))}
    </div>
  )
}

export default FallingPetals
