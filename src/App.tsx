import { ZodiacDescription } from './components/ZodiacDescription'
import { useEffect, useState } from 'react'
import { getLanguage, translations } from './utils/i18n'
import { fetchZodiacDescription } from './services/api'
import s from './App.module.scss'
import { ZodiacSign } from './components/ZodiacSign'
import { LanguageSwitcher } from './components/LanguageSwitcher'

const App = () => {
  const [zodiacSigns, setZodiacSigns] = useState<{ sign: string; period: string; icon: string }[]>(
    []
  )
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  const [language, setLanguage] = useState<'ru' | 'en'>(getLanguage())
  const [description, setDescription] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setZodiacSigns(translations['en'].zodiacSigns)
  }, [language])

  useEffect(() => {
    if (selectedSign) {
      setIsLoading(true)
      fetchZodiacDescription(selectedSign, language, 'today').then(horoscope => {
        setDescription(horoscope)
        setIsLoading(false)
      })
    }
  }, [selectedSign, language])

  const handleSignClick = (sign: string) => {
    setSelectedSign(sign)
  }

  const handleLanguageSwitch = () => {
    const newLanguage: 'ru' | 'en' = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  return (
    <div>
      {selectedSign && description ? (
        <div className={s.description}>
          <ZodiacDescription sign={selectedSign} horoscope={description} />
          <button onClick={() => setSelectedSign(null)}>{translations[language].backButton}</button>
        </div>
      ) : (
        <div className={s.zodiacSigns}>
          {zodiacSigns.map(sign => (
            <ZodiacSign
              key={sign.sign}
              signProps={sign}
              onClick={() => handleSignClick(sign.sign)}
            />
          ))}
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      <LanguageSwitcher language={language} onLanguageSwitch={handleLanguageSwitch} />
    </div>
  )
}

export default App
