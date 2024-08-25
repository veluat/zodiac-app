import React from 'react'
import { translations } from '@/utils/i18n'

interface LanguageSwitcherProps {
  language: 'ru' | 'en'
  onLanguageSwitch: () => void
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  onLanguageSwitch,
}) => {
  return (
    <div className="language-switcher">
      <button onClick={onLanguageSwitch}>{translations[language].switchLanguage}</button>
    </div>
  )
}
