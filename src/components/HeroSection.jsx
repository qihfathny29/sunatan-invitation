import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date("2027-02-15T08:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background ornamen Islami */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047857' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Light glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 bg-emerald-300 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 bg-teal-300 pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Glassmorphism Card */}
      <motion.div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4 py-16 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
      >
        {/* Bismillah */}
        <motion.p className="text-emerald-800 text-2xl mb-2 drop-shadow-sm"
          style={{ fontFamily: "'Scheherazade New', serif" }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>
        <motion.p className="text-emerald-600 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-8 font-medium"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        >
          Bismillahirrahmanirrahim
        </motion.p>

        <div className="flex items-center justify-center gap-4 mb-6 w-full px-8">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
          <span className="text-[#d4af37] text-xl">✨</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        </div>

        <motion.p className="text-emerald-700 text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 font-semibold"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          Walimatul Khitan
        </motion.p>

        <motion.h1 className="font-bold text-center mb-4 pb-2"
          style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(3rem, 12vw, 6rem)", lineHeight: 1.2 }}
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, type: "spring" }}
        >
          <span className="block text-emerald-900">Muhammad</span>
          <span className="block bg-gradient-to-r from-[#b38728] via-[#fcf6ba] to-[#b38728] text-transparent bg-clip-text drop-shadow-sm mt-1 sm:mt-2">Azzam</span>
        </motion.h1>
        
        <motion.p className="text-emerald-700 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-10 font-medium"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        >
          Putra dari Bapak Hendra & Ibu Sari
        </motion.p>

        <motion.div 
          className="flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-emerald-50/60 border border-emerald-200/60 shadow-sm mb-10"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <p className="text-emerald-900 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold">
            Sabtu, 15 Februari 2025
          </p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="grid grid-cols-4 gap-3 sm:gap-6 w-full px-2"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
        >
          {[
            { label: "HARI", value: timeLeft.days },
            { label: "JAM", value: timeLeft.hours },
            { label: "MENIT", value: timeLeft.minutes },
            { label: "DETIK", value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center py-4 px-2 bg-white/50 backdrop-blur-md rounded-2xl border border-white/70 shadow-[0_4px_20px_rgb(0,0,0,0.05)] relative overflow-hidden group">
              {/* Shine effect */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-emerald-800 to-emerald-600 text-transparent bg-clip-text mb-1" style={{ fontFamily: "'Amiri', serif" }}>
                {item.value < 10 ? `0${item.value}` : item.value}
              </span>
              <span className="text-[9px] sm:text-[10px] text-emerald-700 tracking-[0.2em] font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}