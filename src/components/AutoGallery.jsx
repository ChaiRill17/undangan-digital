import React, { useState, useEffect } from 'react'

const BASE = import.meta.env.BASE_URL || '/'

const defaultImages = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
]

export default function AutoGallery({ images = defaultImages, interval = 4000, rounded = true, className = '' }) {
  const [active, setActive] = useState(0)
  const len = images.length

  useEffect(() => {
    if (len <= 1) return
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % len)
    }, interval)
    return () => clearInterval(t)
  }, [len, interval])

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${rounded ? 'rounded-2xl' : ''} ${className}`}>
      <div className="aspect-[4/3] md:aspect-video relative">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={src.startsWith('http') ? src : `${BASE}${src}`}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {len > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? 'bg-white scale-125' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
