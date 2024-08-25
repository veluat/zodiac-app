import React, { useEffect, useState } from 'react'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { getLanguage, translations, zodiacSignData } from '@/utils/i18n'
import { fetchZodiacDescription } from '@/services/api'
import { ZodiacSign } from '@/components/ZodiacSign'
import { ZodiacDescription } from '@/components/ZodiacDescription'
import s from './App.module.scss'

const App: React.FC = () => {
  const [zodiacData, setZodiacData] = useState<
    { sign: string; signEn: string; period: string; icon: string }[]
  >([])
  const [selectedSign, setSelectedSign] = useState<{ sign: string; signEn: string } | null>(null)
  const [language, setLanguage] = useState<'ru' | 'en'>(getLanguage())
  const [horoscope, setHoroscope] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setZodiacData(
      zodiacSignData.map(({ signEn, signRu, periodEn, periodRu, icon }) => ({
        sign: language === 'ru' ? signRu : signEn,
        signEn,
        period: language === 'ru' ? periodRu : periodEn,
        icon,
      }))
    )
  }, [language])

  useEffect(() => {
    if (selectedSign) {
      setIsLoading(true)
      fetchZodiacDescription(selectedSign.signEn, language, 'today')
        .then(horoscope => {
          if (horoscope) {
            setHoroscope(horoscope)
          }
        })
        .catch(error => {
          console.error('Error fetching horoscope:', error)
          setHoroscope(null)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [selectedSign, language])

  const handleSignClick = (sign: string, signEn: string) => {
    setSelectedSign({ sign, signEn })
  }

  const handleLanguageSwitch = () => {
    const newLanguage: 'ru' | 'en' = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  return (
    <div>
      {selectedSign && horoscope ? (
        <div>
          <ZodiacDescription
            horoscope={horoscope}
            sign={translations[language].zodiacSigns[0].sign}
          />
          <button onClick={() => setSelectedSign(null)}>{translations[language].backButton}</button>
        </div>
      ) : (
        <div className={s.zodiacSigns}>
          {zodiacData.map(sign => (
            <ZodiacSign
              key={sign.sign}
              signProps={sign}
              onClick={() => handleSignClick(sign.sign, sign.signEn)}
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
