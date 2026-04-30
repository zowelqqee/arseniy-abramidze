import { person } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-400">
        <span>{person.name}</span>
        <div className="flex gap-5">
          <a href={`mailto:${person.email}`} className="hover:text-indigo-600 transition-colors">
            Email
          </a>
          <a href={person.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
            GitHub
          </a>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
