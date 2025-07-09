import { Button } from '@mui/material'
import { useCallback } from 'react'
import { DARK, LIGHT, SYSTEM } from '../theme/constants'
import type { ModeTypes } from '../theme/types'
import { useTheme } from '../theme/ThemeContext'

export const ThemeSwitcher = () => {
  const { themeMode, selectTheme } = useTheme()

  const changeTheme = useCallback(
    (mode: ModeTypes) => () => {
      selectTheme(mode)
    },
    [selectTheme],
  )

  const getVariant = useCallback(
    (mode: ModeTypes) => (themeMode === mode ? 'contained' : 'outlined'),
    [themeMode],
  )

  return (
    <div>
      <Button
        size="small"
        variant={getVariant(SYSTEM)}
        onClick={changeTheme(SYSTEM)}
      >
        System
      </Button>
      <Button
        size="small"
        variant={getVariant(LIGHT)}
        onClick={changeTheme(LIGHT)}
      >
        Light
      </Button>
      <Button
        size="small"
        variant={getVariant(DARK)}
        onClick={changeTheme(DARK)}
      >
        Dark
      </Button>
    </div>
  )
}
