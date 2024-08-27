export const getLanguage = (): 'ru' | 'en' => {
  const telegramLanguage = navigator.language.split('-')[0]
  return telegramLanguage === 'ru' ? 'ru' : 'en'
}
