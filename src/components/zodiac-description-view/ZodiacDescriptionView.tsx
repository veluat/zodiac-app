import s from './ZodiacDescriptionView.module.scss'

interface ZodiacDescriptionViewProps {
  signEn: string
  signRu: string
  horoscope: string
  language: 'ru' | 'en'
}

export const ZodiacDescriptionView = ({
  signEn,
  signRu,
  horoscope,
  language,
}: ZodiacDescriptionViewProps) => {
  const title = language === 'ru' ? signRu : signEn

  return (
    <div className={s.signDescription}>
      <h3>{title}</h3>
      <p>{horoscope}</p>
    </div>
  )
}
