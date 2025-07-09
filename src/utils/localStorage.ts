import type { EN, RU } from '../i18n/constants'
import type { ThemeTypes } from '../theme/types'

type StorageKeys = 'locale' | 'theme'
type StorageMaps = {
  locale: typeof EN | typeof RU
  theme: ThemeTypes
}

const checkSupported = () => {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    return true
  }

  console.error('[Storage] localStorage is not supported in this environment')
  return false
}

export const getItem = <K extends StorageKeys>(
  key: K,
): StorageMaps[K] | undefined => {
  if (checkSupported())
    return localStorage.getItem(key) as StorageMaps[K] | undefined
}

export const setItem = <K extends StorageKeys>(
  key: K,
  value: StorageMaps[K],
) => {
  if (checkSupported()) localStorage.setItem(key, value)
}
