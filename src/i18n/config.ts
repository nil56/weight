import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en'
import ruTranslation from './locales/ru'
import { EN, RU } from './constants'
import { getItem } from '../utils/localStorage'

const lng = getItem('locale') || RU

i18next.use(initReactI18next).init({
  debug: true,
  lng,
  resources: {
    en: {
      translation: enTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
  fallbackLng: EN,
  interpolation: {
    escapeValue: false,
  },
  // если получите ошибку с DefaultTFuncReturn
  // returnNull: false,
})
