import { createContext, useContext } from 'react'
import type { Lang } from './data'

export const LangContext = createContext<{
  lang: Lang
  toggle: () => void
}>({ lang: 'en', toggle: () => {} })

export function useLang() {
  return useContext(LangContext)
}

export function t<T extends { en: string; ru: string }>(obj: T, lang: Lang): string {
  return obj[lang]
}
