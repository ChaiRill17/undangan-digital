import React, { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'

const BASE = import.meta.env.BASE_URL || '/'

export default function LoveGift() {
  const [showQris, setShowQris] = useState(false)
  const [showBsi, setShowBsi] = useState(false)

  const copyText = (text) => {
    navigator.clipboard?.writeText(text)
  }

  return (
    <section id="love-gift" className="py-16 md:py-24 bg-gradient-to-b from-blossom-50 to-cream">
      <div className="container">
        <ScrollReveal>
          <h2 className="font-script text-4xl md:text-5xl text-blossom-800 text-center mb-4">
            Love Gift
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
            Bagi Anda yang ingin memberikan tanda kasih, dapat melalui:
          </p>
        </ScrollReveal>

        <div className="max-w-md mx-auto space-y-6">
          <ScrollReveal variant="scale" delay={0.1}>
            <div className="card-blossom p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📱</span>
                <span className="font-display font-semibold text-blossom-800">QRIS</span>
              </div>
              <button
                type="button"
                onClick={() => setShowQris(!showQris)}
                className="text-sm text-blossom-600 hover:text-blossom-700 underline"
              >
                {showQris ? 'Sembunyikan' : 'Tampilkan QRIS'}
              </button>
              {showQris && (
                <div className="mt-4 p-4 bg-white rounded-xl inline-block">
                  <img
                    src={`${BASE}assets/images/donate.png`}
                    alt="QRIS"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale" delay={0.15}>
            <div className="card-blossom p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏦</span>
                <span className="font-display font-semibold text-blossom-800">Transfer Bank BSI</span>
              </div>
              <button
                type="button"
                onClick={() => setShowBsi(!showBsi)}
                className="text-sm text-blossom-600 hover:text-blossom-700 underline"
              >
                {showBsi ? 'Sembunyikan' : 'Tampilkan rekening'}
              </button>
              {showBsi && (
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-gray-700">Bank Syariah Indonesia (BSI)</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono">1234567890</span>
                    <button
                      type="button"
                      onClick={() => copyText('1234567890')}
                      className="px-3 py-1 rounded-lg bg-blossom-100 text-blossom-700 text-xs"
                    >
                      Salin
                    </button>
                  </div>
                  <p className="text-gray-600 text-xs">a.n. Pria / Wanita</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
