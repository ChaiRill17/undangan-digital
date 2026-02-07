import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FallingPetals, FloatingFlowers } from './FlowerPetals'

const BASE = import.meta.env.BASE_URL || '/'

export default function OpeningScreen({ onOpen, guestName = 'Kepada Yth. Bapak/Ibu/Saudara/i' }) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => onOpen?.(), 400)
  }

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-blossom-100/95 via-cream/98 to-blossom-200/95 bg-flower-pattern"
        >
          {/* Falling petals layer */}
          <FallingPetals count={30} />
          {/* Floating flowers in background */}
          <FloatingFlowers count={15} />

          <div className="relative z-10 text-center px-6 max-w-md">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-script text-3xl md:text-4xl text-blossom-700 mb-6"
            >
              The Wedding Of
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
              className="mb-6"
            >
              <img
                src={`${BASE}assets/images/bg.webp`}
                alt="Pria & Wanita"
                className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full object-cover border-4 border-white shadow-xl shadow-blossom-300/30"
              />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-script text-4xl md:text-5xl text-blossom-800 mb-2"
            >
              Pria & Wanita
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-blossom-600 text-sm mb-8"
            >
              {guestName}
            </motion.p>
            <motion.button
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpen}
              className="px-8 py-3 rounded-full bg-blossom-500 text-white font-display font-semibold shadow-lg shadow-blossom-400/40 hover:bg-blossom-600 transition-colors"
            >
              Buka Undangan
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
