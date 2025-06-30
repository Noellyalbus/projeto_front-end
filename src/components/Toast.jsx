/**
 * Toast simples ― desaparece sozinho
 * props:
 *  - open  : boolean
 *  - text  : string
 *  - onClose(): fecha manual
 */
export default function Toast({ open, text, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed top-6 right-6 z-[9999]">
      <div className="bg-emerald-50 border-l-4 border-emerald-600 text-emerald-900 max-w-xs p-4 rounded shadow-lg flex gap-3">
        <span className="text-2xl leading-none">✓</span>
        <div className="text-sm font-medium flex-1">{text}</div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="text-lg leading-none hover:text-emerald-600"
        >
          ×
        </button>
      </div>
    </div>
  );
}
