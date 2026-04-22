import { useEffect, useRef, useState } from "react"
import HeroSection from "./HeroSection"
import ChildSection from "./ChildSection"
import EventSection from "./EventSection"
import RSVPSection from "./RSVPSection"
import WishesSection from "./WishesSection"
import GiftSection from "./GiftSection"

export default function MainPage() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {})
    }, 500)
  }, [])

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative overflow-x-hidden"
      style={{ background: "linear-gradient(180deg, #f0faf4 0%, #ffffff 50%, #f0faf4 100%)" }}
    >
      <audio ref={audioRef} loop>
        <source src="/music/nasheed.mp3" type="audio/mpeg" />
      </audio>

      {/* Tombol musik */}
      <button onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-emerald-200 hover:bg-white transition-all"
      >
        <span className="text-lg">{isPlaying ? "🎵" : "🔇"}</span>
        <span className="text-xs text-emerald-700 tracking-widest">{isPlaying ? "Musik" : "Mute"}</span>
      </button>

      <HeroSection />
      <ChildSection />
      <EventSection />
      <RSVPSection />
      <WishesSection />
      <GiftSection />

      {/* Footer */}
      <footer className="py-12 text-center"
        style={{ background: "linear-gradient(180deg, transparent, #d4edda)" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-600">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500" />
        </div>
        <p className="text-emerald-600 text-xs tracking-widest mb-1">WALIMATUL KHITAN</p>
        <h3 className="text-3xl text-emerald-800 font-bold mb-1"
          style={{ fontFamily: "'Amiri', serif" }}>
          Muhammad Azzam
        </h3>
        <p className="text-emerald-600 text-xs tracking-widest">15 FEBRUARI 2025</p>
      </footer>
    </div>
  )
}