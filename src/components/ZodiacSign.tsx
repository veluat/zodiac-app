import s from './ZodiacSign.module.scss'

interface ZodiacSignProps {
  sign: string
  period?: string
  icon?: string
  onClick?: (sign: string) => void
}

export const ZodiacSign = ({ sign, period, icon, onClick }: ZodiacSignProps) => {
  const signTitle = sign.charAt(0).toUpperCase() + sign.slice(1)

  return (
    <div className={s.gridItem} onClick={() => onClick?.(sign)}>
      <img src={icon} alt={sign} />
      <h3>{signTitle}</h3>
      <p>{period}</p>
    </div>
  )
}
