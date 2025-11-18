import { useState } from 'react'

export default function ExpressForm({ onSuccess }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const data = {
      vorname: e.target.vorname.value,
      nachname: e.target.nachname.value,
      email: e.target.email.value,
      telefon: e.target.telefon.value || undefined,
      rolle: e.target.rolle.value || undefined,
      arbeitszeit: e.target.arbeitszeit.value || undefined,
      nachricht: e.target.nachricht.value || undefined,
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bewerbung/express`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error('Fehler beim Senden')
      onSuccess?.(json)
      e.target.reset()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 border border-slate-100">
      <h3 className="text-xl font-semibold text-slate-900">Express-Bewerbung</h3>
      <p className="text-slate-600 mb-4">In unter 60 Sekunden Interesse zeigen – wir melden uns!</p>
      {error && <div className="mb-3 text-sm text-rose-600">{error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        <input name="vorname" required placeholder="Vorname" className="input" />
        <input name="nachname" required placeholder="Nachname" className="input" />
        <input name="email" type="email" required placeholder="E-Mail" className="input md:col-span-2" />
        <input name="telefon" placeholder="Telefon (optional)" className="input md:col-span-2" />
        <input name="rolle" placeholder="Gewünschte Rolle (z. B. ZFA, ZMV, ZMP)" className="input md:col-span-2" />
        <select name="arbeitszeit" className="input md:col-span-2">
          <option value="">Arbeitszeit (optional)</option>
          <option>Vollzeit</option>
          <option>Teilzeit</option>
          <option>Minijob</option>
        </select>
        <textarea name="nachricht" placeholder="Kurze Nachricht (optional)" className="input md:col-span-2" rows="3" />
      </div>
      <button disabled={loading} className="mt-4 px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50">
        {loading ? 'Senden…' : 'Unverbindlich Interesse senden'}
      </button>
    </form>
  )
}
