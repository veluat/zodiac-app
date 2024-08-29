import { translations } from '@/utils/zodiacData.ts'
import { CommonButton } from '@/components/common-button/CommonButton.tsx'
import s from './Header.module.scss'

interface HeaderProps {
  language: 'ru' | 'en'
  onLanguageSwitch: () => void
  handleBackClick: () => void
  showBackButton: boolean
}

export const Header = ({
  handleBackClick,
  language,
  onLanguageSwitch,
  showBackButton,
}: HeaderProps) => {
  const backButtonLabel = translations[language]?.backButton || 'Back Button'
  const languageSwitcher = translations[language]?.switchLanguage || 'Switch Language'

  return (
    <div className={s.header}>
      {showBackButton && <CommonButton onClick={handleBackClick} title={backButtonLabel} />}
      <CommonButton onClick={onLanguageSwitch} title={languageSwitcher} />
    </div>
  )
}
