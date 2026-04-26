import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5umGGjpykcLTO7hQ8HgVTyz6qS9xvDEccdXfT_C4KHxUCVN54OPdyczjwmVp8Q_XSbg/exec"

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({ nama: "", jumlah: "", hadir: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "RSVP",
          nama: form.nama,
          jumlah: form.jumlah,
          hadir: form.hadir
        })
      })
      setSubmitted(true)
    } catch (error) {
      console.error("Gagal mengirim RSVP:", error)
      alert("Terjadi kesalahan, silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-lg mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <span className="text-[#d4af37] text-lg">✎</span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-900 mb-3 drop-shadow-sm"
          style={{ fontFamily: "'Amiri', serif" }}>
          Buku Tamu
        </h2>
        <p className="text-xs text-emerald-600 tracking-[0.3em] font-medium mb-12">
          KONFIRMASI KEHADIRAN ANDA
        </p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form 
              key="form"
              onSubmit={handleSubmit}
              className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-10 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              {/* Royal Corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]/40 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]/40 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/40 pointer-events-none" />

              <div className="space-y-8 text-left relative z-10">
                <div className="relative group">
                  <input type="text" required placeholder=" " id="nama"
                    className="w-full peer px-0 py-3 bg-transparent border-0 border-b-[1.5px] border-emerald-200 text-base text-emerald-900 outline-none focus:ring-0 focus:border-[#d4af37] transition-all"
                    value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })}
                  />
                  <label htmlFor="nama" className="absolute left-0 top-3 text-emerald-600 text-sm tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#d4af37] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#d4af37] pointer-events-none">
                    Nama Lengkap
                  </label>
                </div>
                
                <div className="relative group">
                  <select required
                    className="w-full peer px-0 py-3 bg-transparent border-0 border-b-[1.5px] border-emerald-200 text-base text-emerald-900 outline-none focus:ring-0 focus:border-[#d4af37] transition-all cursor-pointer appearance-none"
                    value={form.jumlah} onChange={e => setForm({ ...form, jumlah: e.target.value })}
                  >
                    <option value="" disabled hidden></option>
                    {[1,2,3,4,5].map(n => <option key={n} value={n} className="text-emerald-900 bg-white">{n} Orang</option>)}
                  </select>
                  <label className="absolute left-0 top-3 text-emerald-600 text-sm tracking-widest uppercase transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#d4af37] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#d4af37]">
                    Jumlah Tamu
                  </label>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-0 top-4 pointer-events-none text-emerald-600">▼</div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs tracking-widest text-[#d4af37] uppercase mb-4 font-semibold text-center">Konfirmasi Kehadiran</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {[{ val: "hadir", label: "Insya Allah Hadir" }, { val: "tidak", label: "Maaf, Tidak Hadir" }].map(opt => (
                      <button 
                        key={opt.val} 
                        type="button"
                        onClick={() => setForm({ ...form, hadir: opt.val })}
                        className={`flex-1 py-3 px-4 rounded-xl text-xs tracking-widest uppercase font-semibold transition-all border ${
                          form.hadir === opt.val 
                            ? "bg-gradient-to-r from-[#b38728] to-[#fcf6ba] text-emerald-950 border-transparent shadow-[0_4px_15px_rgba(212,175,55,0.3)]" 
                            : "bg-white/50 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {/* Hidden input to ensure form validation triggers natively if needed, though handled statefully */}
                  <input type="text" required value={form.hadir} onChange={()=>{}} className="opacity-0 absolute -z-10 h-0 w-0" />
                </div>
              </div>

              <button type="submit" disabled={isLoading}
                className="w-full mt-10 py-4 bg-emerald-900 text-white rounded-xl text-sm tracking-[0.2em] font-bold hover:bg-emerald-800 transition-all shadow-[0_8px_20px_rgba(4,120,87,0.3)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "MENGIRIM..." : "KIRIM KONFIRMASI"}
                {!isLoading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              className="bg-white/70 backdrop-blur-md rounded-[2.5rem] p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-100/50"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-emerald-200/50">
                <span className="text-3xl text-emerald-600">✨</span>
              </div>
              <p className="text-emerald-900 text-2xl font-bold mb-3" style={{ fontFamily: "'Amiri', serif" }}>
                Jazakallahu Khairan, {form.nama}
              </p>
              <div className="w-12 h-[1px] bg-[#d4af37] mx-auto mb-4" />
              <p className="text-xs text-emerald-700 tracking-widest leading-relaxed">
                Terima kasih atas konfirmasi Anda.<br/>Kehadiran dan doa Anda sangat berarti bagi kami.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}