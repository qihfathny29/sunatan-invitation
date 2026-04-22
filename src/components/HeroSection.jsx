import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background ornamen */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, #16a34a 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 bg-emerald-400 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 bg-teal-400 pointer-events-none" />

      <motion.div className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
      >
        {/* Bismillah */}
        <motion.p className="text-emerald-700 text-xl mb-1"
          style={{ fontFamily: "'Scheherazade New', serif" }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>
        <motion.p className="text-emerald-500 text-xs tracking-widest mb-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        >
          Bismillahirrahmanirrahim
        </motion.p>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-500">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500" />
        </div>

        <motion.p className="text-emerald-600 text-xs tracking-[0.4em] uppercase mb-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          Walimatul Khitan
        </motion.p>

        <motion.h1 className="font-bold text-emerald-900 mb-2"
          style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(3rem, 10vw, 6rem)", lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
        >
          Muhammad <span className="text-[#d4af37]">Azzam</span>
        </motion.h1>
        <motion.p className="text-emerald-600 text-xs tracking-[0.2em] uppercase mb-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
        >
          Putra dari Bapak Hendra & Ibu Sari
        </motion.p>

        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-8 h-px bg-emerald-300" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <div className="w-8 h-px bg-emerald-300" />
        </div>

        <motion.p className="text-emerald-600 text-xs tracking-[0.3em] uppercase mt-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        >
          Sabtu, 15 Februari 2025
        </motion.p>
      </motion.div>
    </section>
  )
}