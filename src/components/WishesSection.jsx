import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5umGGjpykcLTO7hQ8HgVTyz6qS9xvDEccdXfT_C4KHxUCVN54OPdyczjwmVp8Q_XSbg/exec"

export default function WishesSection() {
  const [wishes, setWishes] = useState([])
  const [form, setForm] = useState({ name: "", text: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  // Ambil data ucapan ketika pertama load
  useEffect(() => {
    fetch(GOOGLE_SCRIPT_URL + "?action=getWishes")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setWishes(data)
        }
      })
      .catch((err) => console.error("Gagal ambil data:", err))
      .finally(() => setIsFetching(false))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.text) return
    
    setIsLoading(true)
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "Ucapan",
          nama: form.name,
          pesan: form.text
        })
      })
      setWishes([{ ...form, time: "Baru saja" }, ...wishes])
      setForm({ name: "", text: "" })
    } catch (error) {
      console.error("Gagal mengirim doa:", error)
      alert("Terjadi kesalahan, silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-[#f0faf4]/60 to-transparent overflow-hidden">
      {/* Decorative stars/bokeh */}
      <div className="absolute top-10 left-[10%] w-2 h-2 rounded-full bg-[#d4af37]/40 blur-sm pointer-events-none" />
      <div className="absolute top-32 right-[15%] w-3 h-3 rounded-full bg-emerald-400/30 blur-sm pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <span className="text-[#d4af37] text-lg">☾</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-900 mb-3 drop-shadow-sm" style={{ fontFamily: "'Amiri', serif" }}>
          Pesan & Doa
        </h2>
        <p className="text-xs text-emerald-600 tracking-[0.2em] uppercase font-medium mb-12 max-w-sm mx-auto leading-relaxed">
          Untaian doa untuk mengiringi langkah Ananda menuju kedewasaan.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Form */}
          <div className="lg:col-span-2 relative">
            <div className="sticky top-10 bg-white/50 backdrop-blur-xl rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60">
              <form onSubmit={handleSubmit} className="text-left space-y-6">
                <div>
                  <label className="block text-[10px] tracking-widest text-[#d4af37] uppercase mb-2 font-bold">Nama Tamu</label>
                  <input type="text" required placeholder="Ketik nama Anda..."
                    className="w-full px-5 py-4 rounded-2xl border-0 bg-emerald-50/50 text-sm text-emerald-900 placeholder:text-emerald-300 outline-none ring-1 ring-emerald-100 focus:ring-2 focus:ring-[#d4af37] transition-all shadow-inner"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest text-[#d4af37] uppercase mb-2 font-bold">Pesan / Doa</label>
                  <textarea required rows={4} placeholder="Tuliskan doa terbaik..."
                    className="w-full px-5 py-4 rounded-2xl border-0 bg-emerald-50/50 text-sm text-emerald-900 placeholder:text-emerald-300 outline-none ring-1 ring-emerald-100 focus:ring-2 focus:ring-[#d4af37] transition-all resize-none shadow-inner"
                    value={form.text} onChange={e => setForm({ ...form, text: e.target.value })}
                  />
                </div>
                <button type="submit" disabled={isLoading}
                  className="w-full py-4 bg-[#d4af37] text-white rounded-xl text-xs tracking-widest font-bold uppercase hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-[#dfc15e] hover:shadow-[0_4px_15px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  <span>{isLoading ? "Mengirim..." : "Kirim Pesan"}</span>
                  {!isLoading && <span>🕊️</span>}
                </button>
              </form>
            </div>
          </div>

          {/* Daftar Doa & Harapan (Horizontal Carousel) */}
          <div className="lg:col-span-3 flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent">
            <AnimatePresence>
              {wishes.map((w, i) => (
                <motion.div key={i}
                  className="min-w-[85vw] sm:min-w-[320px] snap-center flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-emerald-50/80 text-left relative group h-fit"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#d4af37] to-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-emerald-900 font-bold text-lg flex-shrink-0 border border-emerald-200/50 shadow-inner" style={{ fontFamily: "'Amiri', serif" }}>
                      {w.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0 mt-0.5">
                      <h4 className="text-emerald-950 font-bold text-base truncate" style={{ fontFamily: "'Amiri', serif" }}>{w.name}</h4>
                      <p className="text-[10px] text-emerald-500 font-medium tracking-wider">{w.time}</p>
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <span className="text-[#d4af37]/20 text-4xl font-serif absolute -top-4 -left-2">"</span>
                    <p className="text-sm text-emerald-800/90 leading-relaxed font-serif italic relative z-10">
                      {w.text}
                    </p>
                    <span className="text-[#d4af37]/20 text-4xl font-serif absolute -bottom-6 right-0">"</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {wishes.length === 0 && (
              <p className="text-emerald-400/60 text-sm text-center mt-10 italic w-full">Jadilah yang pertama mengirimkan pesan...</p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #a7f3d0; border-radius: 10px; }
      `}</style>
    </section>
  )
}