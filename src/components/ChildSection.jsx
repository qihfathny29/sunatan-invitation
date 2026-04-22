import { motion } from "framer-motion"

export default function ChildSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-500">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-800 mb-12"
          style={{ fontFamily: "'Amiri', serif" }}>
          Yang Dikhitan
        </h2>

        <motion.div
          className="bg-white rounded-3xl p-10 shadow-xl border border-emerald-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Foto */}
          <div className="w-40 h-40 rounded-full mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center border-4 border-emerald-200 shadow-lg">
            <span className="text-6xl">👦</span>
          </div>

          <h3 className="text-3xl font-bold text-emerald-800 mb-2"
            style={{ fontFamily: "'Amiri', serif" }}>
            Muhammad Azzam
          </h3>
          <p className="text-emerald-600 text-sm mb-1">Putra ke-1 dari</p>
          <p className="text-emerald-800 font-medium mb-1">Bapak Ahmad Hendra</p>
          <p className="text-emerald-600 text-sm mb-1">&</p>
          <p className="text-emerald-800 font-medium mb-6">Ibu Dewi Sari</p>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-emerald-200" />
            <span className="text-[#d4af37] text-lg">☪</span>
            <div className="w-12 h-px bg-emerald-200" />
          </div>

          <p className="text-emerald-600 text-xs tracking-widest mt-4 italic">
            "Dan sungguh, Kami telah memuliakan anak cucu Adam"
          </p>
          <p className="text-emerald-400 text-xs mt-1">QS. Al-Isra: 70</p>
        </motion.div>
      </div>
    </section>
  )
}