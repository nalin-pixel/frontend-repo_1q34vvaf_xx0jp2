import { useRef, useState } from 'react'
import Hero from './components/Hero'
import ExpressForm from './components/ExpressForm'
import StandardForm from './components/StandardForm'
import SuccessToast from './components/SuccessToast'

function App() {
  const formRef = useRef(null)
  const [toast, setToast] = useState(false)

  const handleSuccess = () => {
    setToast(true)
    setTimeout(() => setToast(false), 4000)
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-rose-500" />
            <div>
              <p className="font-bold text-slate-900 leading-none">Zahnarztpraxis</p>
              <p className="text-sm text-slate-500 leading-none">Karriere</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-slate-600">
            <a href="#vorteile" className="hover:text-slate-900">Vorteile</a>
            <a href="#bewerben" className="hover:text-slate-900">Bewerben</a>
            <a href="#kontakt" className="hover:text-slate-900">Kontakt</a>
          </nav>
        </div>
      </header>

      <Hero onStartExpress={scrollToForm} onScrollToForm={scrollToForm} />

      <section id="vorteile" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">Warum wir?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Wertschätzung & Teamgeist',
              text: 'Ein herzliches, hilfsbereites Team mit flachen Hierarchien.'
            },
            {
              title: 'Moderne Praxis',
              text: 'Digitale Prozesse, hochwertige Materialien und aktuelle Technik.'
            },
            {
              title: 'Entwicklung',
              text: 'Fortbildungen, klare Einarbeitung und individuelle Förderung.'
            }
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="bewerben" ref={formRef} className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Jetzt bewerben</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <ExpressForm onSuccess={handleSuccess} />
          <StandardForm onSuccess={handleSuccess} />
        </div>
        <p className="text-sm text-slate-500 mt-4">Wir behandeln deine Daten vertraulich und melden uns schnellstmöglich.</p>
      </section>

      <footer id="kontakt" className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-slate-600">
          <div>
            <p className="font-semibold text-slate-900">Zahnarztpraxis</p>
            <p>Beispielstraße 1, 12345 Musterstadt</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Kontakt</p>
            <p>Telefon: 01234 567890</p>
            <p>E-Mail: karriere@praxis.de</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Hinweis</p>
            <p>Wir freuen uns über Bewerbungen jeglichen Hintergrunds. Du bist willkommen!</p>
          </div>
        </div>
      </footer>

      <SuccessToast visible={toast} onClose={() => setToast(false)} />
    </div>
  )
}

export default App
