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
    footer: string
    footerLink: string
  }
  en: {
    zodiacSigns: ZodiacSign[]
    backButton: string
    switchLanguage: string
    footer: string
    footerLink: string
  }
}

interface ZodiacSignData {
  sign: string
  signEn: string
  signRu: string
  periodEn: string
  periodRu: string
  icon: string
  id: string
}

export const zodiacSignsData: ZodiacSignData[] = [
  {
    id: '1',
    sign: 'aries',
    signEn: 'Aries',
    signRu: 'Oвен',
    periodEn: 'March 21 - April 20',
    periodRu: '21 марта - 20 апреля',
    icon: `${aries}`,
  },
  {
    id: '2',
    sign: 'taurus',
    signEn: 'Taurus',
    signRu: 'Телец',
    periodEn: 'April 21 - May 21',
    periodRu: '21 апреля - 21 мая',
    icon: `${taurus}`,
  },
  {
    id: '3',
    sign: 'gemini',
    signEn: 'Gemini',
    signRu: 'Близнецы',
    periodEn: 'May 22 - June 21',
    periodRu: '22 мая - 21 июня',
    icon: `${gemini}`,
  },
  {
    id: '4',
    sign: 'cancer',
    signEn: 'Cancer',
    signRu: 'Рак',
    periodEn: 'June 22 - July 22',
    periodRu: '22 июня - 22 июля',
    icon: `${cancer}`,
  },
  {
    id: '5',
    sign: 'leo',
    signEn: 'Leo',
    signRu: 'Лев',
    periodEn: 'July 23 - August 23',
    periodRu: '23 июля - 23 августа',
    icon: `${leo}`,
  },
  {
    id: '6',
    sign: 'virgo',
    signEn: 'Virgo',
    signRu: 'Дева',
    periodEn: 'August 24 - September 23',
    periodRu: '24 августа - 23 сентября',
    icon: `${virgo}`,
  },
  {
    id: '7',
    sign: 'libra',
    signEn: 'Libra',
    signRu: 'Весы',
    periodEn: 'September 24 - October 23',
    periodRu: '24 сентября - 23 октября',
    icon: `${libra}`,
  },
  {
    id: '8',
    sign: 'scorpio',
    signEn: 'Scorpio',
    signRu: 'Скорпион',
    periodEn: 'October 24 - November 22',
    periodRu: '24 октября - 22 ноября',
    icon: `${scorpio}`,
  },
  {
    id: '9',
    sign: 'sagittarius',
    signEn: 'Sagittarius',
    signRu: 'Стрелец',
    periodEn: 'November 23 - December 21',
    periodRu: '23 ноября - 21 декабря',
    icon: `${sagittarius}`,
  },
  {
    id: '10',
    sign: 'capricorn',
    signEn: 'Capricorn',
    signRu: 'Козерог',
    periodEn: 'December 22 - January 20',
    periodRu: '22 декабря - 20 января',
    icon: `${capricorn}`,
  },
  {
    id: '11',
    sign: 'aquarius',
    signEn: 'Aquarius',
    signRu: 'Водолей',
    periodEn: 'January 21 - February 19',
    periodRu: '21 января - 19 февраля',
    icon: `${aquarius}`,
  },
  {
    id: '12',
    sign: 'pisces',
    signEn: 'Pisces',
    signRu: 'Рыбы',
    periodEn: 'February 20 - March 20',
    periodRu: '20 февраля - 20 марта',
    icon: `${pisces}`,
  },
]

export const translations: Translations = {
  ru: {
    zodiacSigns: zodiacSignsData.map(({ signRu, periodRu, icon, id }) => ({
      sign: signRu,
      signEn: zodiacSignsData.find(item => item.id === id)?.signEn || '',
      signRu,
      period: periodRu,
      periodEn: zodiacSignsData.find(item => item.id === id)?.periodEn || '',
      periodRu,
      icon,
      id,
    })),
    backButton: 'Назад',
    switchLanguage: 'Сменить язык',
    footer: 'Гороскопы предоставлены ',
    footerLink: 'сайтом Ignio',
  },
  en: {
    zodiacSigns: zodiacSignsData.map(({ signEn, periodEn, icon, id }) => ({
      sign: signEn,
      signEn,
      signRu: zodiacSignsData.find(item => item.id === id)?.signRu || '',
      period: periodEn,
      periodEn,
      periodRu: zodiacSignsData.find(item => item.id === id)?.periodRu || '',
      icon,
      id,
    })),
    backButton: 'Back',
    switchLanguage: 'Switch Language',
    footer: 'Horoscopes provided by ',
    footerLink: 'Ignio',
  },
}
