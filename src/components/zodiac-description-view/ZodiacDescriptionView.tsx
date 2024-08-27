import { translations } from '@/utils/zodiacData'
import s from './ZodiacDescriptionView.module.scss'

interface ZodiacDescriptionViewProps {
  signEn: string
  signRu: string
  horoscope: string
  language: 'ru' | 'en'
  handleBackClick: () => void
}

export const ZodiacDescriptionView = ({
  signEn,
  signRu,
  horoscope,
  language,
  handleBackClick,
}: ZodiacDescriptionViewProps) => {
  const title = language === 'ru' ? signRu : signEn

  return (
    <>
      <div className={s.signDescription}>
        <h3>{title}</h3>
        <p>{horoscope}</p>
      </div>
      <button onClick={handleBackClick}>{translations[language].backButton}</button>
    </>
  )
}
