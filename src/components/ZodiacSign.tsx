interface ZodiacSignProps {
  signProps: { sign: string; period: string; icon: string }
  onClick: (sign: string) => void
}

export const ZodiacSign = ({ signProps, onClick }: ZodiacSignProps) => {
  const { sign, period, icon } = signProps

  return (
    <div className="zodiac-sign" onClick={() => onClick(sign)}>
      <img src={icon} alt={sign} />
      <h3>{sign}</h3>
      <p>{period}</p>
    </div>
  )
}
