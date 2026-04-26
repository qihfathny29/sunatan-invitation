import { motion } from "framer-motion"

export default function ChildSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-lg mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <span className="text-[#d4af37] text-lg">☽</span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-900 mb-14 drop-shadow-sm"
          style={{ fontFamily: "'Amiri', serif" }}>
          Tasyakuran Khitan
        </h2>

        <motion.div
          className="bg-white/70 backdrop-blur-lg rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Ornamen sudut bingkai */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-[#d4af37]/40 rounded-tl-[2.5rem] m-3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-[#d4af37]/40 rounded-tr-[2.5rem] m-3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-[#d4af37]/40 rounded-bl-[2.5rem] m-3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-[#d4af37]/40 rounded-br-[2.5rem] m-3 pointer-events-none" />

          {/* Foto Kubah / Arch Frame */}
          <div className="w-44 h-56 mx-auto mb-8 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center border-4 border-[#d4af37]/50 shadow-inner relative overflow-hidden"
               style={{ borderRadius: "100px 100px 12px 12px" }}>
            
            {/* Inner line */}
            <div className="absolute inset-1.5 border border-[#d4af37]/30" style={{ borderRadius: "90px 90px 8px 8px" }} />
            
            {/* Inisial Emas Elegan - Ganti emoji dengan inisial */}
            <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#bf953f] to-[#b38728] pt-4" 
                  style={{ fontFamily: "'Amiri', serif" }}>
              A
            </span>
          </div>

          <h3 className="text-3xl font-bold text-emerald-900 mb-4"
            style={{ fontFamily: "'Amiri', serif" }}>
            Muhammad Azzam
          </h3>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 h-[1px] bg-emerald-200" />
            <p className="text-emerald-700 text-xs tracking-widest uppercase font-semibold">Putra Pertama</p>
            <div className="flex-1 h-[1px] bg-emerald-200" />
          </div>

          <p className="text-emerald-900 font-medium text-lg mb-0.5">Bapak Ahmad Hendra</p>
          <p className="text-[#d4af37] text-sm mb-0.5 font-serif italic">&</p>
          <p className="text-emerald-900 font-medium text-lg mb-8">Ibu Dewi Sari</p>

          <div className="bg-emerald-50/80 rounded-2xl p-5 border border-emerald-100/60 mt-4 relative">
            <p className="text-emerald-800 text-sm leading-relaxed italic mb-3 font-serif">
              "Dan sungguh, Kami telah memuliakan anak cucu Adam, dan Kami angkut mereka di darat dan di laut..."
            </p>
            <p className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase">QS. Al-Isra: 70</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}