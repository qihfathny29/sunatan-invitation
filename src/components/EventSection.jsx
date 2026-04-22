import { motion } from "framer-motion"

const events = [
  { icon: "🕌", title: "Akad / Doa Bersama", date: "Sabtu, 15 Februari 2025", time: "08.00 WIB – Selesai", place: "Masjid Al-Hikmah", address: "Jl. Melati No. 5, Jakarta Timur", maps: "https://maps.google.com" },
  { icon: "🎉", title: "Walimatul Khitan", date: "Sabtu, 15 Februari 2025", time: "10.00 – 14.00 WIB", place: "Rumah Bapak Ahmad Hendra", address: "Jl. Kenanga Blok C No. 12, Jakarta Timur", maps: "https://maps.google.com" },
]

export default function EventSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-500">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-800 mb-16"
          style={{ fontFamily: "'Amiri', serif" }}>
          Detail Acara
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <motion.div key={i}
              className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100 hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{e.icon}</div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-4"
                style={{ fontFamily: "'Amiri', serif" }}>
                {e.title}
              </h3>
              <p className="text-sm text-emerald-800 font-medium mb-1">{e.date}</p>
              <p className="text-xs text-[#d4af37] tracking-widest mb-3">{e.time}</p>
              <p className="text-sm text-emerald-800 font-medium mb-1">{e.place}</p>
              <p className="text-xs text-emerald-500 mb-6 leading-relaxed">{e.address}</p>
              <a href={e.maps} target="_blank" rel="noreferrer"
                className="inline-block px-6 py-2 border border-emerald-500 text-emerald-600 rounded-full text-xs tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                📍 Lihat di Google Maps
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}