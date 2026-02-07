import React, { useState, useEffect } from 'react'
import { ScrollReveal } from './ScrollReveal'

const TARGET = new Date('2025-03-15T10:00:00') // Sesuaikan tanggal & jam

function Countdown() {
  const [diff, setDiff] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const d = Math.max(0, TARGET - now)
      if (d <= 0) {
        setDiff({ d: 0, h: 0, m: 0, s: 0 })
        return
      }
      setDiff({
        d: Math.floor(d / 86400000),
        h: Math.floor((d % 86400000) / 3600000),
        m: Math.floor((d % 3600000) / 60000),
        s: Math.floor((d % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
      {[
        { v: diff.d, l: 'Hari' },
        { v: diff.h, l: 'Jam' },
        { v: diff.m, l: 'Menit' },
        { v: diff.s, l: 'Detik' },
      ].map(({ v, l }) => (
        <div key={l} className="text-center">
          <span className="block font-display text-2xl md:text-3xl text-blossom-700">{v}</span>
          <span className="text-sm text-blossom-600">{l}</span>
        </div>
      ))}
    </div>
  )
}

export default function WeddingDate() {
  const mapUrl = 'https://goo.gl/maps/ALZR6FJZU3kxVwN86' // Ganti dengan link Google Maps Sentani Pos 7 Bawah Sentani

  return (
    <section id="wedding-date" className="py-16 md:py-24 bg-gradient-to-b from-cream to-blossom-50">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-script text-4xl md:text-5xl text-blossom-800 text-center mb-10">
            Moment Bahagia
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.1}>
          <div className="card-blossom p-6 max-w-xl mx-auto mb-10">
            <Countdown />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah kami akan menyelenggarakan acara:
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <ScrollReveal variant="right" delay={0.1}>
            <div className="card-blossom p-6 md:p-8 text-center border-2 border-blossom-200">
              <h3 className="font-script text-3xl text-blossom-800 mb-2">Akad</h3>
              <p className="text-blossom-600">Pukul 10.00 WIT - Selesai</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="left" delay={0.1}>
            <div className="card-blossom p-6 md:p-8 text-center border-2 border-blossom-200">
              <h3 className="font-script text-3xl text-blossom-800 mb-2">Resepsi</h3>
              <p className="text-blossom-600">Pukul 13.00 WIT - Selesai</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="text-center text-gray-600 mb-4">Dress code: Busana batik dan bersepatu.</p>
        </ScrollReveal>
        <ScrollReveal variant="scale">
          <div className="card-blossom p-6 max-w-xl mx-auto text-center">
            <p className="font-display font-semibold text-blossom-800 mb-2">Lokasi</p>
            <p className="text-gray-700 mb-4">Sentani, Pos 7 Bawah Sentani</p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blossom-500 text-white hover:bg-blossom-600 transition-colors text-sm"
            >
              Buka Google Maps
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
