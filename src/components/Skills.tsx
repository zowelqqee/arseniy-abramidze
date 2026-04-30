import { skills, ui } from '../data'
import { useLang, t } from '../lang'

const tagColors = [
  'bg-indigo-50 text-indigo-700 border-indigo-100',
  'bg-violet-50 text-violet-700 border-violet-100',
  'bg-sky-50 text-sky-700 border-sky-100',
  'bg-emerald-50 text-emerald-700 border-emerald-100',
  'bg-amber-50 text-amber-700 border-amber-100',
  'bg-rose-50 text-rose-700 border-rose-100',
]

export default function Skills() {
  const { lang } = useLang()

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-100">
      <p className="text-xs font-semibold text-sky-500 uppercase tracking-widest mb-2">
        {t(ui.nav.skills, lang)}
      </p>
      <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-8">
        {t(ui.sections.skills, lang)}
      </h2>

      <div className="flex flex-wrap gap-2 max-w-2xl">
        {skills.map((skill, i) => (
          <span
            key={skill}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${tagColors[i % tagColors.length]}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
