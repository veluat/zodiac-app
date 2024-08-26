import React, { useEffect, useState } from 'react'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { getLanguage, translations, zodiacSignsData } from '@/utils/i18n'
import { fetchZodiacDescription } from '@/services/api'
import { ZodiacSign } from '@/components/ZodiacSign'
import { ZodiacDescription } from '@/components/ZodiacDescription'
import s from './App.module.scss'

const App: React.FC = () => {
  const [zodiacData, setZodiacData] = useState<
    { sign: string; signEn: string; signRu: string; period: string; icon: string }[]
  >([])
  const [selectedSign, setSelectedSign] = useState<{
    sign: string
    signEn: string
    signRu: string
  } | null>(null)
  const [language, setLanguage] = useState<'ru' | 'en'>(getLanguage())
  const [horoscope, setHoroscope] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setZodiacData(
      zodiacSignsData.map(({ sign, signEn, signRu, periodEn, periodRu, icon }) => ({
        sign,
        signEn,
        signRu,
        period: language === 'ru' ? periodRu : periodEn,
        icon,
      }))
    )
  }, [language])

  useEffect(() => {
    if (selectedSign) {
      setIsLoading(true)
      fetchZodiacDescription(selectedSign.sign, language, 'today')
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

  const handleSignClick = (sign: string, signEn: string, signRu: string) => {
    setSelectedSign({ sign, signEn, signRu })
  }

  const handleLanguageSwitch = () => {
    const newLanguage: 'ru' | 'en' = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  return (
    <div className={s.mainBlock}>
      <LanguageSwitcher language={language} onLanguageSwitch={handleLanguageSwitch} />
      {selectedSign && horoscope ? (
        <div className={s.signDescription}>
          <ZodiacDescription
            signEn={selectedSign.signEn}
            signRu={selectedSign.signRu}
            horoscope={horoscope}
            language={language}
          />
          <button onClick={() => setSelectedSign(null)}>{translations[language].backButton}</button>
        </div>
      ) : (
        <div className={s.zodiacSigns}>
          {zodiacData.map(sign => (
            <ZodiacSign
              key={sign.sign}
              sign={language === 'ru' ? sign.signRu : sign.signEn}
              period={sign.period}
              icon={sign.icon}
              onClick={() => handleSignClick(sign.sign, sign.signEn, sign.signRu)}
            />
          ))}
        </div>
      )}
      {isLoading && <div>Loading...</div>}
    </div>
  )
}
export default App
