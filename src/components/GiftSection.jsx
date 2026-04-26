import { useState } from "react"
import { motion } from "framer-motion"

const accounts = [
  { icon: "💳", bank: "Bank BCA", number: "123 456 7890", name: "AHMAD HENDRA", type: "mastercard" },
  { icon: "📱", bank: "GoPay / OVO", number: "0812 3456 7890", name: "AHMAD HENDRA", type: "ewallet" },
]

export default function GiftSection() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (number, id) => {
    // Menghapus spasi sebelum dicopy ke clipboard
    navigator.clipboard.writeText(number.replace(/\s+/g, ''))
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-24 px-6 relative bg-gradient-to-t from-emerald-50/50 to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23047857' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-12 h-[1px] bg-[#d4af37]/50" />
          <span className="text-[#d4af37] text-lg">🎁</span>
          <div className="w-12 h-[1px] bg-[#d4af37]/50" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-900 mb-3 drop-shadow-sm" style={{ fontFamily: "'Amiri', serif" }}>
          Tanda Kasih
        </h2>
        <p className="text-xs text-emerald-600/80 mb-14 leading-relaxed max-w-sm mx-auto uppercase tracking-widest">
          DOA & KEHADIRAN ANDA ADALAH HADIAH TERINDAH. BAGI YANG INGIN MEMBERIKAN TANDA KASIH, DAPAT MELALUI:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {accounts.map((acc, i) => (
            <motion.div key={i}
              className="relative w-full max-w-[340px] mx-auto aspect-[1.58] rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_-10px_rgba(4,120,87,0.3)] hover:-translate-y-2 transition-transform duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              viewport={{ once: true }}
              style={{
                background: acc.type === 'mastercard' 
                  ? "linear-gradient(135deg, #0f4e3c 0%, #065f46 50%, #022c22 100%)" 
                  : "linear-gradient(135deg, #065f46 0%, #10b981 100%)"
              }}
            >
              {/* Overlay Glass / Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

              {/* Top Section */}
              <div className="flex justify-between items-start z-10">
                <span className="text-[#d4af37] font-serif font-bold tracking-widest text-lg opacity-90 drop-shadow-md">
                  {acc.bank}
                </span>
                <span className="text-2xl opacity-80">{acc.icon}</span>
              </div>

              {/* Number Section */}
              <div className="z-10 text-left">
                <p className="text-white/80 text-[10px] tracking-widest mb-1 font-mono uppercase">Card Number</p>
                <div className="flex items-center gap-3">
                  <p className="text-white text-xl sm:text-2xl font-mono tracking-[0.1em] sm:tracking-[0.15em] drop-shadow-md">
                    {acc.number}
                  </p>
                  <button onClick={() => handleCopy(acc.number, i)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#d4af37]/80 text-white backdrop-blur-sm transition-all border border-white/20 hover:border-transparent group-hover:opacity-100"
                    title="Salin Nomor"
                  >
                    {copied === i ? <span className="text-sm">✔️</span> : <span className="text-sm">📋</span>}
                  </button>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-end z-10 w-full">
                <div className="text-left w-full">
                  <p className="text-[#d4af37]/80 text-[8px] tracking-[0.2em] font-mono mb-0.5 uppercase">Cardholder Name</p>
                  <p className="text-white text-sm font-semibold tracking-widest truncate max-w-[200px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {acc.name}
                  </p>
                </div>
                
                {/* Chip Icon for elegance */}
                <div className="w-10 h-7 rounded bg-gradient-to-br from-[#d4af37] to-[#8a6d2b] opacity-80 flex-shrink-0 relative overflow-hidden border border-[#fcf6ba]/30">
                  <div className="absolute top-1/2 w-full h-[1px] bg-[#022c22]/20" />
                  <div className="absolute left-1/2 h-full w-[1px] bg-[#022c22]/20" />
                  <div className="absolute inset-2 border-[0.5px] border-[#022c22]/20 rounded-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notifikasi Salin */}
        <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#d4af37] text-emerald-950 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all duration-300 ${copied !== null ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"}`}>
          ✨ Nomor berhasil disalin!
        </div>
      </div>
    </section>
  )
}