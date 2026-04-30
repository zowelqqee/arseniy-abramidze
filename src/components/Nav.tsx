import { useLang, t } from '../lang'
import { person, ui } from '../data'

export default function Nav() {
  const { lang, toggle } = useLang()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight text-neutral-900">
          {person.name}
        </span>
        <div className="flex items-center gap-5 text-sm text-neutral-500">
          <a href="#projects" className="hidden sm:block hover:text-neutral-900 transition-colors">
            {t(ui.nav.projects, lang)}
          </a>
          <a href="#experience" className="hidden sm:block hover:text-neutral-900 transition-colors">
            {t(ui.nav.experience, lang)}
          </a>
          <a href="#skills" className="hidden sm:block hover:text-neutral-900 transition-colors">
            {t(ui.nav.skills, lang)}
          </a>

          <button
            onClick={toggle}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-neutral-200 text-xs font-semibold text-neutral-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-indigo-600' : ''}>EN</span>
            <span className="text-neutral-300">/</span>
            <span className={lang === 'ru' ? 'text-indigo-600' : ''}>RU</span>
          </button>

          <a
            href="mailto:zowel.aep@gmail.com"
            className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition-colors"
          >
            {t(ui.nav.contact, lang)}
          </a>
        </div>
      </nav>
    </header>
  )
}
