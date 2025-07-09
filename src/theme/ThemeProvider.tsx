import { useCallback, useMemo, useState, type FC, type ReactNode } from 'react'
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { ModeTypes, ThemeContextType } from './types'
import { getItem, setItem } from '../utils/localStorage'
import { DARK, LIGHT, SYSTEM } from './constants'
import { ThemeContext } from './ThemeContext'

const savedMode = getItem('theme')
const isValidMode = ['light', 'dark', 'system'].includes(savedMode)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const systemMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? DARK
    : LIGHT

  const [themeMode, setThemeMode] = useState<ModeTypes>(() => {
    return isValidMode ? savedMode : SYSTEM
  })

  const theme = useMemo(() => {
    const effectiveMode = themeMode === SYSTEM ? systemMode : themeMode

    return createTheme({
      palette: {
        mode: effectiveMode,
      },
    })
  }, [themeMode, systemMode])

  const selectTheme = useCallback<ThemeContextType['selectTheme']>(mode => {
    setItem('theme', mode)
    setThemeMode(mode)
  }, [])

  return (
    <ThemeContext.Provider value={{ themeMode, selectTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
