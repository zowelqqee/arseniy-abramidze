import { createContext, useContext, useState } from 'react'
import type { Lang } from './data'

const LangContext = createContext<{
  lang: Lang
  toggle: () => void
}>({ lang: 'en', toggle: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === 'en' ? 'ru' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export function t<T extends { en: string; ru: string }>(obj: T, lang: Lang): string {
  return obj[lang]
}
