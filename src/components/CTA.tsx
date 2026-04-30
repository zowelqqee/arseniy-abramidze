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
            href={person.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            <TelegramIcon />
            Telegram
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

function TelegramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}
