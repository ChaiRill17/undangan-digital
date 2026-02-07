import React from 'react'
import { motion } from 'framer-motion'
import { FloatingFlowers } from './FlowerPetals'

const BASE = import.meta.env.BASE_URL || '/'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blossom-50 via-cream to-blossom-100/50 bg-flower-pattern overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <FloatingFlowers count={8} />
      </div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl md:text-5xl text-blossom-700 mb-6"
        >
          Undangan Pernikahan
        </motion.h1>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src={`${BASE}assets/images/bg.webp`}
            alt="Pria & Wanita"
            className="w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full object-cover border-4 border-white shadow-2xl shadow-blossom-300/30"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-script text-4xl md:text-5xl text-blossom-800 mt-6 mb-2"
        >
          Pria & Wanita
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-blossom-600 text-lg mb-6"
        >
          Sabtu, 15 Maret 2025
        </motion.p>
        <motion.a
          href="#wedding-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-blossom-400 text-blossom-700 hover:bg-blossom-100 transition-colors text-sm"
        >
          <span>Simpan ke Kalender</span>
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-1"
        >
          <div className="w-6 h-10 rounded-full border-2 border-blossom-400/60 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-blossom-500"
            />
          </div>
          <span className="text-blossom-500 text-xs">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
