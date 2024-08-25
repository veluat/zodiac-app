import s from './ZodiacDescription.module.scss'

interface ZodiacDescriptionProps {
  sign: string
  horoscope: string
}

export const ZodiacDescription = (props: ZodiacDescriptionProps) => {
  const { sign, horoscope } = props

  return (
    <div className={s.root}>
      <h2>{sign}</h2>
      <p>{horoscope}</p>
    </div>
  )
}
