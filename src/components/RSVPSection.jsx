import { useState } from "react"
import { motion } from "framer-motion"

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nama: "", jumlah: "", hadir: "" })

  return (
    <section className="py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500" />
          <span className="text-emerald-500">☪</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500" />
        </div>
        <h2 className="text-4xl font-bold text-emerald-800 mb-3"
          style={{ fontFamily: "'Amiri', serif" }}>
          Konfirmasi Kehadiran
        </h2>
        <p className="text-xs text-emerald-500 tracking-widest mb-12">KEHADIRAN ANDA ADALAH KEHORMATAN KAMI</p>

        {!submitted ? (
          <motion.form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100 text-left"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="mb-5">
              <label className="block text-xs tracking-widest text-emerald-600 uppercase mb-2">Nama Lengkap</label>
              <input type="text" required placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/30 text-sm text-emerald-900 outline-none focus:border-emerald-400 transition-colors"
                value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })}
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs tracking-widest text-emerald-600 uppercase mb-2">Jumlah Tamu</label>
              <select required
                className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/30 text-sm text-emerald-900 outline-none focus:border-emerald-400 transition-colors"
                value={form.jumlah} onChange={e => setForm({ ...form, jumlah: e.target.value })}
              >
                <option value="">Pilih jumlah</option>
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} orang</option>)}
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-xs tracking-widest text-emerald-600 uppercase mb-3">Konfirmasi</label>
              <div className="flex gap-6">
                {[{ val: "hadir", label: "Insya Allah Hadir 🤲" }, { val: "tidak", label: "Tidak Hadir 😔" }].map(opt => (
                  <label key={opt.val} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="hadir" value={opt.val} required
                      className="accent-emerald-500"
                      onChange={e => setForm({ ...form, hadir: e.target.value })}
                    />
                    <span className="text-sm text-emerald-800">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit"
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-sm tracking-widest hover:opacity-90 transition-opacity shadow-md"
            >
              Kirim Konfirmasi 🤲
            </button>
          </motion.form>
        ) : (
          <motion.div className="bg-white rounded-3xl p-10 shadow-lg border border-emerald-100"
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          >
            <div className="text-5xl mb-4">✅</div>
            <p className="text-emerald-800 text-lg" style={{ fontFamily: "'Amiri', serif" }}>
              Jazakallahu Khairan, {form.nama}!
            </p>
            <p className="text-xs text-emerald-500 mt-2">Konfirmasi kehadiran Anda telah kami terima.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}