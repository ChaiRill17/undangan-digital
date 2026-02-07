import React from 'react'
import { ScrollReveal } from './ScrollReveal'

const BASE = import.meta.env.BASE_URL || '/'

export default function Bride() {
  return (
    <section id="bride" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-flower-pattern opacity-50 pointer-events-none" />
      <div className="container relative z-10">
        <ScrollReveal>
          <h2 className="font-arabic text-3xl md:text-4xl text-blossom-700 text-center py-6">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-display text-xl text-blossom-700 text-center mb-8">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 px-4">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal variant="right" delay={0.1}>
            <div className="text-center mb-8">
              <img
                src={`${BASE}assets/images/cowo.webp`}
                alt="Pria"
                className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full object-cover border-4 border-blossom-200 shadow-xl"
              />
              <h3 className="font-script text-3xl text-blossom-800 mt-4">Pria</h3>
              <p className="text-blossom-600 mt-1">Putra ke-1</p>
              <p className="text-gray-600 text-sm">Bapak ... & Ibu ...</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="font-script text-5xl md:text-6xl text-blossom-500 text-center my-4">&</p>
          </ScrollReveal>

          <ScrollReveal variant="left" delay={0.1}>
            <div className="text-center">
              <img
                src={`${BASE}assets/images/cewe.webp`}
                alt="Wanita"
                className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full object-cover border-4 border-blossom-200 shadow-xl"
              />
              <h3 className="font-script text-3xl text-blossom-800 mt-4">Wanita</h3>
              <p className="text-blossom-600 mt-1">Putri ke-2</p>
              <p className="text-gray-600 text-sm">Bapak ... & Ibu ...</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
