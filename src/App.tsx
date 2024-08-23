import { useState, useEffect } from 'react'
import { ZodiacSign } from '@/components/ZodiacSign'
import { getLanguage, translations } from '@/utils/i18n'
import { fetchZodiacDescription } from '@/services/api'

const App: React.FC = () => {
  const [zodiacData, setZodiacData] = useState<{ sign: string; period: string; icon: string }[]>([])
  const [selectedSign, setSelectedSign] = useState<string | null>(null)
  const [language, setLanguage] = useState<'ru' | 'en'>(getLanguage())
  const [description, setDescription] = useState<string | null>(null)

  useEffect(() => {
    setZodiacData(translations[language].zodiacSigns)
  }, [language])

  useEffect(() => {
    if (selectedSign) {
      fetchZodiacDescription(language, 'today').then(setDescription)
    }
  }, [selectedSign, language])

  const handleSignClick = (sign: string) => {
    setSelectedSign(sign)
  }

  const handleLanguageSwitch = (newLanguage: 'ru' | 'en') => {
    setLanguage(newLanguage)
  }

  return (
    <div>
      <div className="zodiac-signs">
        {zodiacData.map(sign => (
          <ZodiacSign key={sign.sign} signProps={sign} onClick={() => handleSignClick(sign.sign)} />
        ))}
      </div>
      {selectedSign && description && (
        <div className="zodiac-description">
          <h2>{selectedSign}</h2>
          <p>{description}</p>
          <button onClick={() => setSelectedSign(null)}>{translations[language].backButton}</button>
        </div>
      )}
      <div className="language-buttons">
        <button onClick={() => handleLanguageSwitch('ru')}>{translations.ru.switchLanguage}</button>
        <button onClick={() => handleLanguageSwitch('en')}>{translations.en.switchLanguage}</button>
      </div>
    </div>
  )
}

export default App
