import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Button, Typography } from '@mui/material'
import { ThemeSwitcher } from './components/ThemeSwitcher'

function App() {
  const { t } = useTranslation()
  

  return (
    <>
      <Button>hello</Button>
      <LanguageSwitcher />
      <ThemeSwitcher />
      <Typography>{t('title')}</Typography>
    </>
  )
}

export default App
