import { person, ui } from '../data'
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
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          <a
            href={`mailto:${person.email}`}
            className="text-sm text-neutral-400 hover:text-indigo-600 transition-colors"
          >
            {person.email}
          </a>
        </div>
      </div>
    </section>
  )
}

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
