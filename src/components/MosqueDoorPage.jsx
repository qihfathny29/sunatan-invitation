import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MosqueDoorPage({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    if (isOpening) return
    setIsOpening(true)
    setTimeout(() => onOpen(), 2200)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a2a1a 0%, #1a4a2e 40%, #0d3320 100%)" }}
    >
      {/* Bintang-bintang */}
      {[...Array(50)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2.5 + 1 + "px",
            height: Math.random() * 2.5 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 60 + "%",
          }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 4 }}
        />
      ))}

      {/* Bulan sabit */}
      <motion.div
        className="absolute top-12 right-16 text-5xl"
        animate={{ rotate: [0, 5, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌙
      </motion.div>

      {/* Ornamen atas */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-6 opacity-30">
        <div className="text-[#d4af37] text-6xl tracking-widest">✦ ✦ ✦</div>
      </div>

      {/* Content */}
      <motion.div className="text-center relative z-10 px-6 w-full max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Bismillah */}
        <motion.p
          className="text-[#d4af37] text-lg mb-1 tracking-widest"
          style={{ fontFamily: "'Scheherazade New', serif" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>
        <motion.p className="text-emerald-300 text-xs tracking-[0.3em] uppercase mb-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        >
          Bismillahirrahmanirrahim
        </motion.p>

        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[#d4af37]">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        <motion.p className="text-emerald-200 text-xs tracking-[0.35em] uppercase mb-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        >
          Undangan Walimatul Khitan
        </motion.p>
        <motion.h1 className="font-bold text-white mb-1"
          style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
        >
          Muhammad <span className="text-[#d4af37]">Azzam</span>
        </motion.h1>
        <motion.p className="text-emerald-300 text-xs tracking-[0.25em] uppercase mb-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        >
          Sabtu, 15 Februari 2025
        </motion.p>

        {/* ===== PINTU MASJID ===== */}
        <motion.div
          className="cursor-pointer inline-flex flex-col items-center gap-4"
          onClick={handleOpen}
          whileHover={!isOpening ? { scale: 1.02 } : {}}
        >
          {/* Container pintu */}
          <div className="relative" style={{ width: 200, height: 260 }}>

            {/* Dinding/frame masjid */}
            <div className="absolute inset-0 rounded-t-full"
              style={{ background: "linear-gradient(180deg, #1a5c38 0%, #0f3d24 100%)", border: "3px solid #d4af37" }}
            />

            {/* Ornamen lengkung atas (kubah kecil) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-3xl">🕌</div>

            {/* Ornamen bintang kiri kanan */}
            <div className="absolute top-6 left-4 text-[#d4af37] text-xs opacity-60">✦</div>
            <div className="absolute top-6 right-4 text-[#d4af37] text-xs opacity-60">✦</div>

            {/* Pintu KIRI */}
            <motion.div
              className="absolute bottom-0 left-0 origin-left z-20"
              style={{ width: "50%", height: "75%", transformStyle: "preserve-3d" }}
              animate={isOpening ? { rotateY: -110 } : { rotateY: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="w-full h-full rounded-tl-full flex flex-col items-center justify-center gap-3"
                style={{ background: "linear-gradient(135deg, #c8960c, #a67c00)", borderRight: "1px solid #8a6500", boxShadow: "inset -4px 0 8px rgba(0,0,0,0.3)" }}
              >
                {/* Ornamen pintu kiri */}
                <div className="text-white/40 text-2xl">✦</div>
                <div className="w-6 h-6 border border-white/30 rounded-full" />
                <div className="text-white/40 text-lg">❋</div>
                {/* Handle */}
                <div className="absolute right-2 top-1/2 w-2 h-2 bg-white/60 rounded-full" />
              </div>
            </motion.div>

            {/* Pintu KANAN */}
            <motion.div
              className="absolute bottom-0 right-0 origin-right z-20"
              style={{ width: "50%", height: "75%", transformStyle: "preserve-3d" }}
              animate={isOpening ? { rotateY: 110 } : { rotateY: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="w-full h-full rounded-tr-full flex flex-col items-center justify-center gap-3"
                style={{ background: "linear-gradient(135deg, #a67c00, #c8960c)", borderLeft: "1px solid #8a6500", boxShadow: "inset 4px 0 8px rgba(0,0,0,0.3)" }}
              >
                {/* Ornamen pintu kanan */}
                <div className="text-white/40 text-2xl">✦</div>
                <div className="w-6 h-6 border border-white/30 rounded-full" />
                <div className="text-white/40 text-lg">❋</div>
                {/* Handle */}
                <div className="absolute left-2 top-1/2 w-2 h-2 bg-white/60 rounded-full" />
              </div>
            </motion.div>

            {/* Bagian dalam pintu (terlihat saat terbuka) */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center"
              style={{ height: "75%", background: "linear-gradient(180deg, #0a4020, #062a14)" }}
            >
              <AnimatePresence>
                {isOpening && (
                  <motion.div className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="text-3xl mb-1">☪️</div>
                    <p className="text-[#d4af37] text-xs tracking-widest">Ahlan Wasahlan</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tangga bawah */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2"
              style={{ width: 220, height: 16, background: "#d4af37", borderRadius: 4, opacity: 0.7 }}
            />
          </div>

          {/* Hint */}
          <AnimatePresence>
            {!isOpening && (
              <motion.p className="text-emerald-300 text-xs tracking-[0.2em] opacity-70"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                exit={{ opacity: 0 }}
              >
                Klik untuk membuka undangan
              </motion.p>
            )}
          </AnimatePresence>
          {isOpening && (
            <motion.p className="text-emerald-300 text-xs tracking-[0.2em]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            >
              Membuka undangan... ☪️
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      {/* Ornamen bawah */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-20">
        <div className="text-[#d4af37] text-4xl tracking-widest">✦ ✦ ✦</div>
      </div>
    </div>
  )
}