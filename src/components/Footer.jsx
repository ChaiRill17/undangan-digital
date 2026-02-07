import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 bg-blossom-800 text-blossom-100">
      <div className="container text-center">
        <p className="max-w-xl mx-auto mb-6">
          Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.
        </p>
        <p className="font-display text-xl mb-2">Wassalamualaikum Warahmatullahi Wabarakatuh</p>
        <p className="font-arabic text-xl mb-8">اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ</p>
        <hr className="border-blossom-600 max-w-xs mx-auto mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span>Dibuat dengan ❤️</span>
          <a
            href="https://github.com/dirgaakbar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blossom-200 hover:text-white transition-colors"
          >
            dirgaakbar
          </a>
        </div>
      </div>
    </footer>
  )
}
