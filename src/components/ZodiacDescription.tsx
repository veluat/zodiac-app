import s from './ZodiacDescription.module.scss'

interface ZodiacDescriptionProps {
  horoscope: string
  language: 'ru' | 'en'
  signRu: string
  signEn: string
}

export const ZodiacDescription = ({
  signEn,
  signRu,
  horoscope,
  language,
}: ZodiacDescriptionProps) => {
  const title = language === 'ru' ? signRu : signEn
  return (
    <div className={s.signDescription}>
      <h3>{title}</h3>
      <p>{horoscope}</p>
    </div>
  )
}
