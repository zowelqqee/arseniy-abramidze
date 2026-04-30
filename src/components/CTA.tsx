import { ui } from '../data'
import { useLang, t } from '../lang'

export default function CTA() {
  const { lang } = useLang()
  const s = ui.sections.cta

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-100">
      <div className="max-w-xl">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-4">
          {t(s.label, lang)}
        </p>
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-3">
          {t(s.title, lang)}
        </h2>
        <p className="text-base text-neutral-500 leading-relaxed mb-8">
          {t(s.body, lang)}
        </p>
        <a
          href="mailto:zowel.aep@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          {t(ui.hero.contactMe, lang)}
        </a>
      </div>
    </section>
  )
}
