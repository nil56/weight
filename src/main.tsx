import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/config'
import App from './App'
import { ThemeProvider } from './theme/ThemeProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
