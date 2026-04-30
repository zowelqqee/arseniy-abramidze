import { education, ui } from '../data'
import { useLang, t } from '../lang'

export default function Education() {
  const { lang } = useLang()

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-100">
      <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-2">
        {t(ui.sections.education, lang)}
      </p>
      <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-8">
        {t(ui.sections.education, lang)}
      </h2>

      <div className="flex flex-col gap-3 max-w-xl">
        <p className="text-base font-semibold text-neutral-900">
          {t(education.degree, lang)}
          <span className="ml-3 text-sm font-normal text-neutral-400">
            {t(education.detail, lang)}
          </span>
        </p>
        <ul className="flex flex-col gap-2 mt-1">
          {education.achievements[lang].map((a) => (
            <li key={a} className="flex gap-2.5 items-center text-sm text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
