import { experience, ui } from '../data'
import { useLang, t } from '../lang'

export default function Experience() {
  const { lang } = useLang()

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-100">
      <p className="text-xs font-semibold text-violet-500 uppercase tracking-widest mb-2">
        {t(ui.nav.experience, lang)}
      </p>
      <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-10">
        {t(ui.sections.experience, lang)}
      </h2>

      <div className="flex flex-col gap-10 max-w-2xl">
        {experience.map((e, i) => {
          const role = t(e.role, lang)
          const company = typeof e.company === 'string' ? e.company : t(e.company, lang)
          const points = e.points[lang]
          const dotColor = i === 0 ? 'bg-violet-400' : 'bg-neutral-300'
          const lineColor = i === 0 ? 'bg-violet-100' : 'bg-neutral-100'

          return (
            <div key={role + company} className="flex gap-5">
              <div className="flex flex-col items-center pt-1 shrink-0">
                <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
                {i < experience.length - 1 && (
                  <div className={`w-0.5 flex-1 mt-2 ${lineColor}`} />
                )}
              </div>
              <div className="pb-2">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                  <span className="text-base font-semibold text-neutral-900">{role}</span>
                  <span className="text-sm font-medium text-violet-600">{company}</span>
                  <span className="text-xs text-neutral-400 ml-auto tabular-nums">{e.period}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-neutral-500 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
