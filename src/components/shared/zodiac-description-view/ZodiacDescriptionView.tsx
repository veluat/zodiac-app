import s from './ZodiacDescriptionView.module.scss'
import { ReactNode } from 'react'

interface ZodiacDescriptionViewProps {
  signEn: string
  signRu: string
  horoscope: ReactNode
  language: 'ru' | 'en'
  icon: string
}

export const ZodiacDescriptionView = ({
  icon,
  signEn,
  signRu,
  horoscope,
  language,
}: ZodiacDescriptionViewProps) => {
  const title = language === 'ru' ? signRu : signEn

  const today = new Date()
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedDate = today.toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US', options)

  return (
    <div className={s.signDescription}>
      <img src={icon} alt={title} className={s.zodiacIcon} />
      <p>{formattedDate}</p>
      <h3>{title}</h3>
      <p>{horoscope}</p>
    </div>
  )
}
