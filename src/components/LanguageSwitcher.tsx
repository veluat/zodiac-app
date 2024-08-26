import React from 'react'
import { translations } from '@/utils/i18n'
import s from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  language: 'ru' | 'en'
  onLanguageSwitch: () => void
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  language,
  onLanguageSwitch,
}) => {
  return (
    <div className={s.languageSwitcher}>
      <button onClick={onLanguageSwitch}>{translations[language].switchLanguage}</button>
    </div>
  )
}
