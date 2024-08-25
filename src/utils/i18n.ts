interface Translations {
  ru: {
    zodiacSigns: { sign: string; period: string; icon: string }[]
    backButton: string
    switchLanguage: string
  }
  en: {
    zodiacSigns: { sign: string; period: string; icon: string }[]
    backButton: string
    switchLanguage: string
  }
}

export const translations: Translations = {
  ru: {
    zodiacSigns: [
      { sign: 'овен', period: '21 марта - 20 апреля', icon: '♈' },
      { sign: 'телец', period: '21 апреля - 21 мая', icon: '♉' },
      { sign: 'близнецы', period: '22 мая - 21 июня', icon: '♊' },
      { sign: 'рак', period: '22 июня - 22 июля', icon: '♋' },
      { sign: 'лев', period: '23 июля - 23 августа', icon: '♌' },
      { sign: 'дева', period: '24 августа - 23 сентября', icon: '♍' },
      { sign: 'весы', period: '24 сентября - 23 октября', icon: '♎' },
      { sign: 'скорпион', period: '24 октября - 22 ноября', icon: '♏' },
      { sign: 'стрелец', period: '23 ноября - 21 декабря', icon: '♐' },
      { sign: 'козерог', period: '22 декабря - 20 января', icon: '♑' },
      { sign: 'водолей', period: '21 января - 19 февраля', icon: '♒' },
      { sign: 'рыбы', period: '20 февраля - 20 марта', icon: '♓' },
    ],
    backButton: 'Назад',
    switchLanguage: 'Сменить язык',
  },
  en: {
    zodiacSigns: [
      { sign: 'aries', period: 'March 21 - April 20', icon: '♈' },
      { sign: 'taurus', period: 'April 21 - May 21', icon: '♉' },
      { sign: 'gemini', period: 'May 22 - June 21', icon: '♊' },
      { sign: 'cancer', period: 'June 22 - July 22', icon: '♋' },
      { sign: 'leo', period: 'July 23 - August 23', icon: '♌' },
      { sign: 'virgo', period: 'August 24 - September 23', icon: '♍' },
      { sign: 'libra', period: 'September 24 - October 23', icon: '♎' },
      { sign: 'scorpio', period: 'October 24 - November 22', icon: '♏' },
      { sign: 'sagittarius', period: 'November 23 - December 21', icon: '♐' },
      { sign: 'capricorn', period: 'December 22 - January 20', icon: '♑' },
      { sign: 'aquarius', period: 'January 21 - February 19', icon: '♒' },
      { sign: 'pisces', period: 'February 20 - March 20', icon: '♓' },
    ],
    backButton: 'Back',
    switchLanguage: 'Switch Language',
  },
}

export const getLanguage = (): 'ru' | 'en' => {
  const telegramLanguage = navigator.language.split('-')[0]
  return telegramLanguage === 'ru' ? 'ru' : 'en'
}
