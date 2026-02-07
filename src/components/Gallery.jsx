import React from 'react'
import { ScrollReveal } from './ScrollReveal'
import AutoGallery from './AutoGallery'

// 1–5 foto; ganti dengan path/URL foto Anda
const galleryImages = [
  'https://picsum.photos/800/600?random=g1',
  'https://picsum.photos/800/600?random=g2',
  'https://picsum.photos/800/600?random=g3',
  'https://picsum.photos/800/600?random=g4',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-script text-4xl md:text-5xl text-blossom-800 text-center mb-12">
            Galeri
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <AutoGallery images={galleryImages} interval={4000} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
