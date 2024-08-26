import aries from '@/assets/aries.png'
import pisces from '@/assets/pisces.png'
import leo from '@/assets/leo.png'
import aquarius from '@/assets/aquarius.png'
import gemini from '@/assets/gemini.png'
import capricorn from '@/assets/capricorn.png'
import sagittarius from '@/assets/sagittarius.png'
import scorpio from '@/assets/scorpio.png'
import taurus from '@/assets/taurus.png'
import cancer from '@/assets/cancer.png'
import libra from '@/assets/libra.png'
import virgo from '@/assets/virgo.png'

export interface ZodiacSign {
  sign: string
  signEn: string
  signRu: string
  periodEn: string
  periodRu: string
  icon: string
  id: string
}

export interface Translations {
  ru: {
    zodiacSigns: ZodiacSign[]
    backButton: string
    switchLanguage: string
  }
  en: {
    zodiacSigns: ZodiacSign[]
    backButton: string
    switchLanguage: string
  }
}

export const zodiacSignData: {
  signEn: string
  signRu: string
  periodEn: string
  periodRu: string
  icon: string
  id: string
}[] = [
  {
    id: '1',
    signEn: 'aries',
    signRu: 'овен',
    periodEn: 'March 21 - April 20',
    periodRu: '21 марта - 20 апреля',
    icon: `${aries}`,
  },
  {
    id: '2',
    signEn: 'taurus',
    signRu: 'телец',
    periodEn: 'April 21 - May 21',
    periodRu: '21 апреля - 21 мая',
    icon: `${taurus}`,
  },
  {
    id: '3',
    signEn: 'gemini',
    signRu: 'близнецы',
    periodEn: 'May 22 - June 21',
    periodRu: '22 мая - 21 июня',
    icon: `${gemini}`,
  },
  {
    id: '4',
    signEn: 'cancer',
    signRu: 'рак',
    periodEn: 'June 22 - July 22',
    periodRu: '22 июня - 22 июля',
    icon: `${cancer}`,
  },
  {
    id: '5',
    signEn: 'leo',
    signRu: 'лев',
    periodEn: 'July 23 - August 23',
    periodRu: '23 июля - 23 августа',
    icon: `${leo}`,
  },
  {
    id: '6',
    signEn: 'virgo',
    signRu: 'дева',
    periodEn: 'August 24 - September 23',
    periodRu: '24 августа - 23 сентября',
    icon: `${virgo}`,
  },
  {
    id: '7',
    signEn: 'libra',
    signRu: 'весы',
    periodEn: 'September 24 - October 23',
    periodRu: '24 сентября - 23 октября',
    icon: `${libra}`,
  },
  {
    id: '8',
    signEn: 'scorpio',
    signRu: 'скорпион',
    periodEn: 'October 24 - November 22',
    periodRu: '24 октября - 22 ноября',
    icon: `${scorpio}`,
  },
  {
    id: '9',
    signEn: 'sagittarius',
    signRu: 'стрелец',
    periodEn: 'November 23 - December 21',
    periodRu: '23 ноября - 21 декабря',
    icon: `${sagittarius}`,
  },
  {
    id: '10',
    signEn: 'capricorn',
    signRu: 'козерог',
    periodEn: 'December 22 - January 20',
    periodRu: '22 декабря - 20 января',
    icon: `${capricorn}`,
  },
  {
    id: '11',
    signEn: 'aquarius',
    signRu: 'водолей',
    periodEn: 'January 21 - February 19',
    periodRu: '21 января - 19 февраля',
    icon: `${aquarius}`,
  },
  {
    id: '12',
    signEn: 'pisces',
    signRu: 'рыбы',
    periodEn: 'February 20 - March 20',
    periodRu: '20 февраля - 20 марта',
    icon: `${pisces}`,
  },
]

export const translations: Translations = {
  ru: {
    zodiacSigns: zodiacSignData.map(({ signRu, periodRu, icon, id }) => ({
      sign: signRu,
      signEn: zodiacSignData.find(item => item.id === id)?.signEn || '',
      signRu,
      period: periodRu,
      periodEn: zodiacSignData.find(item => item.id === id)?.periodEn || '',
      periodRu,
      icon,
      id,
    })),
    backButton: 'Назад',
    switchLanguage: 'Сменить язык',
  },
  en: {
    zodiacSigns: zodiacSignData.map(({ signEn, periodEn, icon, id }) => ({
      sign: signEn,
      signEn,
      signRu: zodiacSignData.find(item => item.id === id)?.signRu || '',
      period: periodEn,
      periodEn,
      periodRu: zodiacSignData.find(item => item.id === id)?.periodRu || '',
      icon,
      id,
    })),
    backButton: 'Back',
    switchLanguage: 'Switch Language',
  },
}

export const getLanguage = (): 'ru' | 'en' => {
  const telegramLanguage = navigator.language.split('-')[0]
  return telegramLanguage === 'ru' ? 'ru' : 'en'
}
