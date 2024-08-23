import React from 'react'

interface ZodiacSignProps {
  signProps: { sign: string; period: string; icon: string }
  onClick: () => void
}

export const ZodiacSign: React.FC<ZodiacSignProps> = ({ signProps, onClick }) => {
  const { sign, period, icon } = signProps

  return (
    <div className="zodiac-sign" onClick={onClick}>
      <img src={icon} alt={sign} />
      <h3>{sign}</h3>
      <p>{period}</p>
    </div>
  )
}
