import React from 'react'
import { translations } from '@/utils/i18n'

interface LanguageSwitcherProps {
  language: 'ru' | 'en'
  onLanguageSwitch: (newLanguage: 'ru' | 'en') => void
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  onLanguageSwitch,
}) => {
  const handleLanguageSwitch = () => {
    const newLanguage: 'ru' | 'en' = language === 'ru' ? 'en' : 'ru'
    onLanguageSwitch(newLanguage)
  }

  return (
    <div className="language-switcher">
      <button onClick={handleLanguageSwitch}>{translations[language].switchLanguage}</button>
    </div>
  )
}
