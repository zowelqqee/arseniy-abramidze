import { useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from './data'
import { LangContext } from './lang'

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang((l) => l === 'en' ? 'ru' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}
