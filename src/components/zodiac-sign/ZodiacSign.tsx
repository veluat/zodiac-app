import s from './ZodiacSign.module.scss'

interface ZodiacSignProps {
  sign: string
  period?: string
  icon?: string
  onSelect?: (sign: string) => void
}

export const ZodiacSign = ({ sign, period, icon, onSelect }: ZodiacSignProps) => {
  return (
    <div className={s.gridItem} onClick={() => onSelect?.(sign)}>
      <img src={icon} alt={sign} />
      <h3>{sign}</h3>
      <p>{period}</p>
    </div>
  )
}
