import { ZodiacSign } from '@/components/shared/zodiac-sign/ZodiacSign.tsx'
import s from './ZodiacSignsList.module.scss'

interface ZodiacSignsListProps {
  onSignSelect: (sign: string, signEn: string, signRu: string) => void
  language: 'ru' | 'en'
  zodiacData: {
    sign: string
    signEn: string
    signRu: string
    period: string
    icon: string
  }[]
}

export const ZodiacSignsList = ({ onSignSelect, language, zodiacData }: ZodiacSignsListProps) => {
  return (
    <div className={s.zodiacSigns}>
      {zodiacData.map(sign => (
        <ZodiacSign
          key={sign.sign}
          sign={language === 'ru' ? sign.signRu : sign.signEn}
          period={sign.period}
          icon={sign.icon}
          onSelect={() => onSignSelect(sign.sign, sign.signEn, sign.signRu)}
        />
      ))}
    </div>
  )
}
