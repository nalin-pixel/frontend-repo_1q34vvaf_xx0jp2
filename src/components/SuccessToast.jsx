export default function SuccessToast({ visible, message, onClose }) {
  if (!visible) return null
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-lg">
      <div className="flex items-center gap-3">
        <span className="font-medium">{message || 'Vielen Dank! Wir melden uns in Kürze.'}</span>
        <button onClick={onClose} className="text-white/80 hover:text-white">Schließen</button>
      </div>
    </div>
  )
}
