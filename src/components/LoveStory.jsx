import React from 'react'
import { ScrollReveal } from './ScrollReveal'
import AutoGallery from './AutoGallery'

const BASE = import.meta.env.BASE_URL || '/'

// Ganti dengan 1–5 URL foto Anda (bisa pakai path lokal atau URL)
const loveStoryPhotos = [
  'https://picsum.photos/800/600?random=a',
  'https://picsum.photos/800/600?random=b',
  'https://picsum.photos/800/600?random=c',
]

const timeline = [
  { title: 'Awal Pertemuan', text: 'Kisah kami bermula dari pertemuan yang sederhana. Dengan izin Allah, kami dipertemukan dan saling mengenal.' },
  { title: 'Benih Cinta', text: 'Seiring waktu, kami memutuskan untuk menjalin hubungan yang lebih serius dengan niat menikah dan membangun keluarga sakinah.' },
  { title: 'Menuju Pelaminan', text: 'Alhamdulillah, dengan ridho kedua keluarga, kami akan melangsungkan pernikahan. Semoga menjadi keluarga yang diridhai Allah.' },
]

export default function LoveStory() {
  return (
    <section id="kisah" className="py-16 md:py-24 bg-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-script text-4xl md:text-5xl text-blossom-800 text-center mb-12">
            Kisah Cinta
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={0.1}>
          <div className="card-blossom p-4 md:p-6 max-w-4xl mx-auto">
            <div className="mb-8">
              <AutoGallery images={loveStoryPhotos} interval={4500} />
            </div>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blossom-200 flex items-center justify-center text-blossom-700 font-display font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-blossom-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
