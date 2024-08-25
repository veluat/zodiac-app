import s from './ZodiacSign.module.scss'

interface ZodiacSignProps {
  signProps: { sign: string; period: string; icon: string }
  onClick: (sign: string) => void
}

export const ZodiacSign = ({ signProps, onClick }: ZodiacSignProps) => {
  const { sign, period, icon } = signProps

  return (
    <div className={s.wrapp} onClick={() => onClick(sign)}>
      <img src={icon} alt={sign} />
      <h3>{sign}</h3>
      <p>{period}</p>
    </div>
  )
}
