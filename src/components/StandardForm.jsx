import { useState } from 'react'

export default function StandardForm({ onSuccess }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.target)

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bewerbung/standard`, {
        method: 'POST',
        body: formData,
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
      <h3 className="text-xl font-semibold text-slate-900">Standard-Bewerbung</h3>
      <p className="text-slate-600 mb-4">Mit Lebenslauf, Zeugnissen oder weiteren Dokumenten.</p>
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
        <textarea name="nachricht" placeholder="Nachricht (optional)" className="input md:col-span-2" rows="3" />
        <input name="dateien" type="file" multiple className="input md:col-span-2" />
      </div>
      <button disabled={loading} className="mt-4 px-5 py-3 rounded-xl bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-50">
        {loading ? 'Hochladen…' : 'Bewerbung senden'}
      </button>
    </form>
  )
}
