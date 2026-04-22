import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WishesSection() {
  const [wishes, setWishes] = useState([
    { name: "Ustadz Mahmud", text: "Semoga menjadi anak yang sholeh, berbakti kepada orang tua dan berguna bagi agama 🤲", },
  ])
  const [form, setForm] = useState({ name: "", text: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.text) return
    setWishes([{ ...form }, ...wishes])
    setForm({ name: "", text: "" })
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-500">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-800 mb-3"
          style={{ fontFamily: "'Amiri', serif" }}>
          Ucapan & Doa
        </h2>
        <p className="text-xs text-emerald-500 tracking-widest mb-12">TULISKAN DOA TERBAIK ANDA</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100 text-left mb-8">
          <div className="mb-5">
            <label className="block text-xs tracking-widest text-emerald-600 uppercase mb-2">Nama</label>
            <input type="text" required placeholder="Nama Anda"
              className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/30 text-sm outline-none focus:border-emerald-400 transition-colors"
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label className="block text-xs tracking-widest text-emerald-600 uppercase mb-2">Ucapan & Doa</label>
            <textarea required rows={4} placeholder="Tuliskan doa terbaik Anda..."
              className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/30 text-sm outline-none focus:border-emerald-400 transition-colors resize-none"
              value={form.text} onChange={e => setForm({ ...form, text: e.target.value })}
            />
          </div>
          <button type="submit"
            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-sm tracking-widest hover:opacity-90 transition-opacity shadow-md"
          >
            Kirim Doa 🤲
          </button>
        </form>

        <div className="flex flex-col gap-4 text-left">
          <AnimatePresence>
            {wishes.map((w, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-5 shadow-md border border-emerald-100"
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {w.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-emerald-800 font-medium text-sm">{w.name}</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed ml-12">{w.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}