import React from 'react'
import { ScrollReveal } from './ScrollReveal'

export default function Verse() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-blossom-50 to-cream">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-blossom-800 text-center mb-10">
            Allah Subhanahu Wa Ta'ala berfirman
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.1}>
          <div className="card-blossom p-6 md:p-8 max-w-2xl mx-auto mb-6">
            <p className="text-gray-700 text-center mb-2">
              Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).
            </p>
            <p className="text-blossom-600 text-center font-display">QS. Adh-Dhariyat: 49</p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="scale" delay={0.2}>
          <div className="card-blossom p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-gray-700 text-center mb-2">
              Dan sesungguhnya Dialah yang menciptakan pasangan laki-laki dan perempuan.
            </p>
            <p className="text-blossom-600 text-center font-display">QS. An-Najm: 45</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
