import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { useCallback } from 'react'
import type { Languages } from '../i18n/types'
import { EN, RU } from '../i18n/constants'
import { setItem } from '../utils/localStorage'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = useCallback(
    (lng: Languages) => () => {
      i18n.changeLanguage(lng)
      setItem('locale', lng)
    },
    [i18n],
  )

  const getVariant = useCallback(
    (lng: Languages) => (i18n.language === lng ? 'contained' : 'outlined'),
    [i18n],
  )

  return (
    <div>
      <Button size='small' variant={getVariant(RU)} onClick={changeLanguage(RU)}>
        RU
      </Button>
      <Button size='small' variant={getVariant(EN)} onClick={changeLanguage(EN)}>
        EN
      </Button>
    </div>
  )
}
