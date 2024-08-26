import React from 'react'
import s from './ZodiacDescription.module.scss'

interface ZodiacDescriptionProps {
  horoscope: string
  sign: string
}

export const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ horoscope, sign }) => {
  const signTitle = sign.charAt(0).toUpperCase() + sign.slice(1)

  return (
    <div className={s.signDescription}>
      <h2>{signTitle}</h2>
      <p>{horoscope}</p>
    </div>
  )
}
