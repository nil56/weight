import type { DARK, LIGHT, SYSTEM } from './constants'

export type ModeTypes = typeof DARK | typeof LIGHT | typeof SYSTEM

export interface ThemeContextType {
  themeMode: ModeTypes
  selectTheme: (themeMode: ModeTypes) => void
}
