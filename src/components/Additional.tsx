import { additional, ui } from '../data'
import { useLang, t } from '../lang'

export default function Additional() {
  const { lang } = useLang()

  return (
    <section id="additional" className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-100">
      <p className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2">
        {t(ui.nav.additional, lang)}
      </p>
      <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-8">
        {t(ui.sections.additional, lang)}
      </h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {additional.map((item) => (
          <div key={item.label.en} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">
              {t(item.label, lang)}
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              {t(item.value, lang)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
