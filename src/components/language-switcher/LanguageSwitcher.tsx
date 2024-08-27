import { translations } from '@/utils/zodiacData'

interface LanguageSwitcherProps {
  language: 'ru' | 'en'
  onLanguageSwitch: () => void
}

export const LanguageSwitcher = ({ language, onLanguageSwitch }: LanguageSwitcherProps) => {
  return (
    <>
      <button onClick={onLanguageSwitch}>{translations[language].switchLanguage}</button>
    </>
  )
}
