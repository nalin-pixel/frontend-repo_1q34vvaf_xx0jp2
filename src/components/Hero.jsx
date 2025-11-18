import { motion } from 'framer-motion'

export default function Hero({ onStartExpress, onScrollToForm }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              Karriere in unserer Zahnarztpraxis
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-slate-700"
            >
              Werde Teil unseres herzlichen Teams – modern, menschlich und mit Fokus auf deine Entwicklung.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onStartExpress}
                className="px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Express-Bewerbung starten
              </button>
              <button
                onClick={onScrollToForm}
                className="px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition"
              >
                Details einreichen
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-500">Dauer: Express 60 Sek. • Standard 3–5 Min.</p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-100 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-100 rounded-full blur-2xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 border border-slate-100"
            >
              <ul className="space-y-3 text-slate-700">
                <li>• Moderne Ausstattung und digitale Abläufe</li>
                <li>• Fortbildungen und Entwicklungsmöglichkeiten</li>
                <li>• Ein kollegiales, wertschätzendes Team</li>
                <li>• Flexible Arbeitszeiten und faire Bezahlung</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
