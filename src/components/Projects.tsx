import { projects, ui } from '../data'
import { useLang, t } from '../lang'

type Color = 'indigo' | 'violet' | 'sky'

const colorMap: Record<Color, {
  border: string
  tag: string
  accent: string
  label: string
  placeholder: { bg: string; dot: string; icon: string }
}> = {
  indigo: {
    border: 'border-indigo-200 hover:border-indigo-400',
    tag: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    accent: 'bg-indigo-500',
    label: 'text-indigo-500',
    placeholder: { bg: '#eef2ff', dot: '#c7d2fe', icon: '#a5b4fc' },
  },
  violet: {
    border: 'border-violet-200 hover:border-violet-400',
    tag: 'bg-violet-50 text-violet-700 border-violet-100',
    accent: 'bg-violet-500',
    label: 'text-violet-500',
    placeholder: { bg: '#f5f3ff', dot: '#ddd6fe', icon: '#c4b5fd' },
  },
  sky: {
    border: 'border-sky-200 hover:border-sky-400',
    tag: 'bg-sky-50 text-sky-700 border-sky-100',
    accent: 'bg-sky-500',
    label: 'text-sky-500',
    placeholder: { bg: '#f0f9ff', dot: '#bae6fd', icon: '#7dd3fc' },
  },
}

function ImageSlot({ src, color, name }: { src: string; color: Color; name: string }) {
  const p = colorMap[color].placeholder

  if (src) {
    return (
      <img
        src={src}
        alt={`${name} screenshot`}
        className="w-full h-full object-cover"
      />
    )
  }

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 select-none"
      style={{
        backgroundColor: p.bg,
        backgroundImage: `radial-gradient(circle, ${p.dot} 1.5px, transparent 1.5px)`,
        backgroundSize: '22px 22px',
      }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke={p.icon}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span style={{ color: p.icon }} className="text-xs font-medium tracking-wide">
        screenshot
      </span>
    </div>
  )
}

function FeaturedCard({ p, lang }: { p: (typeof projects)[number] & { image: string }; lang: 'en' | 'ru' }) {
  const c = colorMap[p.color]
  const highlights = 'highlights' in p ? p.highlights?.[lang] : undefined

  return (
    <div className={`flex flex-col rounded-xl border bg-white overflow-hidden transition-colors ${c.border}`}>
      <div className="h-52 shrink-0">
        <ImageSlot src={p.image} color={p.color} name={p.name} />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4 flex items-start gap-3">
          <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.accent}`} />
          <div className="flex-1">
            {'period' in p && p.period && (
              <span className="float-right ml-4 text-xs text-neutral-400 tabular-nums">{p.period}</span>
            )}
            <span className={`text-xs font-semibold uppercase tracking-widest ${c.label}`}>
              {t(p.tagline, lang)}
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-0.5">{p.name}</h3>
          </div>
        </div>
        <p className="text-sm text-neutral-500 leading-relaxed flex-1">{t(p.description, lang)}</p>
        {highlights && (
          <ul className="mt-4 flex flex-col gap-2">
            {highlights.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-neutral-500 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className={`px-2 py-0.5 text-xs font-medium rounded border ${c.tag}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompactCard({ p, lang }: { p: (typeof projects)[number]; lang: 'en' | 'ru' }) {
  const c = colorMap[p.color]
  const highlights = 'highlights' in p ? p.highlights?.[lang] : undefined

  return (
    <div className={`flex flex-col p-6 rounded-xl border bg-white transition-colors ${c.border}`}>
      <div className="mb-4 flex items-start gap-3">
        <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.accent}`} />
        <div className="flex-1">
          {'period' in p && p.period && (
            <span className="float-right ml-4 text-xs text-neutral-400 tabular-nums">{p.period}</span>
          )}
          <span className={`text-xs font-semibold uppercase tracking-widest ${c.label}`}>
            {t(p.tagline, lang)}
          </span>
          <h3 className="text-lg font-bold text-neutral-900 mt-0.5">{p.name}</h3>
        </div>
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed flex-1">{t(p.description, lang)}</p>
      {highlights && (
        <ul className="mt-4 flex flex-col gap-2">
          {highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm text-neutral-500 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className={`px-2 py-0.5 text-xs font-medium rounded border ${c.tag}`}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const { lang } = useLang()

  const featured = projects.filter((p): p is (typeof p) & { image: string } => 'image' in p)
  const compact = projects.filter((p) => !('image' in p))

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-100">
      <SectionLabel color="text-indigo-500">{t(ui.nav.projects, lang)}</SectionLabel>
      <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-10">
        {t(ui.sections.projects, lang)}
      </h2>

      <div className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {featured.map((p) => (
            <FeaturedCard key={p.name} p={p} lang={lang} />
          ))}
        </div>

        {compact.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {compact.map((p) => (
              <CompactCard key={p.name} p={p} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionLabel({ children, color = 'text-neutral-400' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${color}`}>
      {children}
    </p>
  )
}
