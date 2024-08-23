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
      { sign: 'Овен', period: '21 марта - 20 апреля', icon: '♈' },
      { sign: 'Телец', period: '21 апреля - 21 мая', icon: '♉' },
      { sign: 'Близнецы', period: '22 мая - 21 июня', icon: '♊' },
      { sign: 'Рак', period: '22 июня - 22 июля', icon: '♋' },
      { sign: 'Лев', period: '23 июля - 23 августа', icon: '♌' },
      { sign: 'Дева', period: '24 августа - 23 сентября', icon: '♍' },
      { sign: 'Весы', period: '24 сентября - 23 октября', icon: '♎' },
      { sign: 'Скорпион', period: '24 октября - 22 ноября', icon: '♏' },
      { sign: 'Стрелец', period: '23 ноября - 21 декабря', icon: '♐' },
      { sign: 'Козерог', period: '22 декабря - 20 января', icon: '♑' },
      { sign: 'Водолей', period: '21 января - 19 февраля', icon: '♒' },
      { sign: 'Рыбы', period: '20 февраля - 20 марта', icon: '♓' },
    ],
    backButton: 'Назад',
    switchLanguage: 'Сменить язык',
  },
  en: {
    zodiacSigns: [
      { sign: 'Aries', period: 'March 21 - April 20', icon: '♈' },
      { sign: 'Taurus', period: 'April 21 - May 21', icon: '♉' },
      { sign: 'Gemini', period: 'May 22 - June 21', icon: '♊' },
      { sign: 'Cancer', period: 'June 22 - July 22', icon: '♋' },
      { sign: 'Leo', period: 'July 23 - August 23', icon: '♌' },
      { sign: 'Virgo', period: 'August 24 - September 23', icon: '♍' },
      { sign: 'Libra', period: 'September 24 - October 23', icon: '♎' },
      { sign: 'Scorpio', period: 'October 24 - November 22', icon: '♏' },
      { sign: 'Sagittarius', period: 'November 23 - December 21', icon: '♐' },
      { sign: 'Capricorn', period: 'December 22 - January 20', icon: '♑' },
      { sign: 'Aquarius', period: 'January 21 - February 19', icon: '♒' },
      { sign: 'Pisces', period: 'February 20 - March 20', icon: '♓' },
    ],
    backButton: 'Back',
    switchLanguage: 'Switch Language',
  },
}

export const getLanguage = (): 'ru' | 'en' => {
  const telegramLanguage = navigator.language.split('-')[0]
  return telegramLanguage === 'ru' ? 'ru' : 'en'
}
