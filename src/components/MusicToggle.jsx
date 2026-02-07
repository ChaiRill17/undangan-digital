import React, { useState, useRef, useEffect } from 'react'

export default function MusicToggle({ src }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onEnded = () => setPlaying(false)
    audio.addEventListener('ended', onEnded)
    return () => audio.removeEventListener('ended', onEnded)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      audio.currentTime = 0
    } else {
      audio.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause musik' : 'Putar musik'}
        className="fixed bottom-24 right-4 z-50 w-12 h-12 rounded-full bg-white/95 border-2 border-blossom-200 shadow-lg flex items-center justify-center text-blossom-600 hover:bg-blossom-50 transition-colors"
      >
        {playing ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>
    </>
  )
}
