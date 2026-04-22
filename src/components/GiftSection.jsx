import { useState } from "react"
import { motion } from "framer-motion"

const accounts = [
  { icon: "🏦", bank: "BCA", number: "1234567890", name: "Ahmad Hendra" },
  { icon: "💚", bank: "GoPay / OVO", number: "08123456789", name: "Ahmad Hendra" },
]

export default function GiftSection() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (number, id) => {
    navigator.clipboard.writeText(number)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

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
          Amplop Digital
        </h2>
        <p className="text-sm text-emerald-500 mb-12 leading-relaxed">
          Doa dan kehadiran Anda adalah hadiah terbaik. Namun jika ingin memberikan tanda kasih:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {accounts.map((acc, i) => (
            <motion.div key={i}
              className="bg-white rounded-3xl p-7 shadow-lg border border-emerald-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{acc.icon}</div>
              <h4 className="text-xl font-bold text-emerald-800 mb-3"
                style={{ fontFamily: "'Amiri', serif" }}>
                {acc.bank}
              </h4>
              <p className="text-lg font-medium text-emerald-900 tracking-widest mb-1">{acc.number}</p>
              <p className="text-xs text-emerald-500 mb-5">a.n. {acc.name}</p>
              <button onClick={() => handleCopy(acc.number, i)}
                className={`px-6 py-2 rounded-full text-xs tracking-widest border transition-all duration-300 ${
                  copied === i
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                }`}
              >
                {copied === i ? "✅ Tersalin!" : "Salin Nomor"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}