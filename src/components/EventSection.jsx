import { motion } from "framer-motion"

const events = [
  { 
    title: "Akad / Doa Bersama", date: "Sabtu, 15", month: "Februari 2025", 
    time: "08.00 WIB – Selesai", place: "Masjid Al-Hikmah", 
    address: "Jl. Melati No. 5, Jakarta Timur", maps: "https://maps.google.com" 
  },
  { 
    title: "Walimatul Khitan", date: "Sabtu, 15", month: "Februari 2025", 
    time: "10.00 – 14.00 WIB", place: "Rumah Bapak Ahmad Hendra", 
    address: "Jl. Kenanga Blok C No. 12, Jakarta Barat", maps: "https://maps.google.com" 
  },
]

export default function EventSection() {
  return (
    <section className="py-24 px-6 relative bg-[#f9fdfa]">
      {/* Decorative side borders */}
      <div className="absolute top-0 left-0 w-[4vw] h-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(20,83,45,0.02) 0%, transparent 100%)" }} />
      <div className="absolute top-0 right-0 w-[4vw] h-full" style={{ backgroundImage: "linear-gradient(-90deg, rgba(20,83,45,0.02) 0%, transparent 100%)" }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <span className="text-[#d4af37] text-lg">✧</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />
        </div>
        <h2 className="text-[2.5rem] font-bold text-emerald-900 mb-14 drop-shadow-sm leading-none"
          style={{ fontFamily: "'Amiri', serif" }}>
          Rangkaian Acara
        </h2>

        <div className="flex flex-col gap-10">
          {events.map((e, i) => (
            <motion.div key={i}
              className="relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.06)] group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Inner stroke border */}
              <div className="absolute inset-2 border border-emerald-100/50 rounded-2xl pointer-events-none" />

              {/* Header Box dengan Gradasi Emas (VIP Pass styling) */}
              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-sm font-bold text-[#b38728] tracking-[0.2em] mb-1">{e.date}</span>
                <span className="text-2xl text-emerald-900 font-bold mb-2 break-words" style={{ fontFamily: "'Amiri', serif" }}>{e.title}</span>
                <span className="text-xs text-emerald-600 font-medium tracking-widest">{e.month}</span>
              </div>
              
              {/* Separator / Tear Line */}
              <div className="w-full flex items-center justify-center gap-2 mb-6 opacity-60">
                <div className="w-full border-t border-dashed border-emerald-300" />
                <span className="text-[#b38728] text-[10px]">♦</span>
                <div className="w-full border-t border-dashed border-emerald-300" />
              </div>

              {/* Info Acara */}
              <div className="space-y-4 mb-8 text-center text-sm font-medium">
                <div>
                  <p className="text-xs text-emerald-500 uppercase tracking-widest mb-0.5">Waktu</p>
                  <p className="text-emerald-900 text-base">{e.time}</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-500 uppercase tracking-widest mb-0.5">Tempat</p>
                  <p className="text-emerald-900 text-lg mb-1 leading-snug">{e.place}</p>
                  <p className="text-emerald-700 text-xs italic opacity-80">{e.address}</p>
                </div>
              </div>

              {/* Luxury Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-20">
                <a href={e.maps} target="_blank" rel="noreferrer"
                  className="px-6 py-3 flex items-center justify-center gap-2 border-[1.5px] border-[#d4af37] text-emerald-900 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#d4af37]/5 hover:bg-[#d4af37] hover:text-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  📍 Petunjuk Arah
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}