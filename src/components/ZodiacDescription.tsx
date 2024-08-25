import React from 'react'

interface ZodiacDescriptionProps {
  horoscope: string
  sign: string
}

export const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ horoscope, sign }) => {
  const signTitle = sign.charAt(0).toUpperCase() + sign.slice(1)

  return (
    <div>
      <h2>{signTitle}</h2>
      <p>{horoscope}</p>
    </div>
  )
}
