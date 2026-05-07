import { person, ui } from '../data'
import { useLang, t } from '../lang'

export default function Hero() {
  const { lang } = useLang()

  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span className="text-xs font-medium text-indigo-600 tracking-wide">
            {t(person.location, lang)}
          </span>
        </div>

        <h1 className="text-4xl sm:text-[52px] font-bold text-neutral-900 leading-tight tracking-tight mb-5">
          {person.name}
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-neutral-700 leading-snug mb-5">
          {t(person.headline, lang)}
        </p>

        <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-xl">
          {t(person.subheadline, lang)}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            {t(ui.hero.viewProjects, lang)}
          </a>
          <a
            href={`mailto:${person.email}`}
            className="px-5 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-medium hover:border-neutral-500 hover:text-neutral-900 transition-colors"
          >
            {t(ui.hero.contactMe, lang)}
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-5 text-sm text-neutral-500">
        <a
          href={`mailto:${person.email}`}
          className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
        >
          <MailIcon />
          {person.email}
        </a>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
        >
          <LinkedinIcon />
          LinkedIn
        </a>
        <a
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
        >
          <GithubIcon />
          GitHub
        </a>
        <span className="flex items-center gap-2 text-neutral-400">
          <LocationIcon />
          {t(person.location, lang)}
        </span>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.75-5.625-6.75-11.25a6.75 6.75 0 1 1 13.5 0C18.75 15.375 12 21 12 21Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  )
}
