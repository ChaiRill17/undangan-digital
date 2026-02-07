import React from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#bride', label: 'Mempelai' },
  { href: '#kisah', label: 'Kisah' },
  { href: '#wedding-date', label: 'Acara' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#love-gift', label: 'Gift' },
]

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-blossom-200 shadow-lg">
      <ul className="flex justify-around items-center py-2 px-2 max-w-lg mx-auto">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="flex flex-col items-center gap-0.5 py-2 px-1 text-blossom-600 hover:text-blossom-800 text-xs transition-colors font-medium"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
