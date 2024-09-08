import { translateText } from '@/utils/translateText.ts'
import { useEffect, useState } from 'react'
import { ZodiacSign, zodiacSignsData } from '@/utils/zodiacData'
import { useHoroscopes } from '@/hook/useHoroscopes'

export const useZodiacContext = () => {
  const [zodiacData, setZodiacData] = useState<
    { sign: string; signEn: string; signRu: string; period: string; icon: string }[]
  >([])
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null)
  const [language, setLanguage] = useState<'ru' | 'en'>('en')
  const [translations, setTranslations] = useState<{ [key: string]: string[] }>({})

  const { horoscopes, isLoading: isHoroscopesLoading, error } = useHoroscopes()

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
    const fetchTranslation = async () => {
      if (selectedSign && horoscopes[selectedSign.sign]) {
        const todayHoroscope = horoscopes[selectedSign.sign]?.today

        if (todayHoroscope) {
          const lines = todayHoroscope.split('\n')
          const translatedLines = await Promise.all(lines.map(line => translateText(line)))
          setTranslations(prev => ({
            ...prev,
            [todayHoroscope]: translatedLines,
          }))
        }
      }
    }

    fetchTranslation()
  }, [horoscopes, selectedSign, language])

  const handleSignSelect = (sign: string) => {
    const foundSign = zodiacSignsData.find(zodiac => zodiac.sign === sign)
    if (foundSign) {
      setSelectedSign(foundSign)
    }
  }

  const handleBackClick = () => {
    setSelectedSign(null)
  }

  const handleLanguageSwitch = () => {
    const newLanguage: 'ru' | 'en' = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  const horoscope = selectedSign
    ? (language === 'ru'
        ? horoscopes[selectedSign.sign]?.today
        : translations[horoscopes[selectedSign.sign]?.today]?.join('\n')) ||
      horoscopes[selectedSign.sign]?.today
    : null

  return {
    language,
    handleLanguageSwitch,
    selectedSign,
    handleSignSelect,
    horoscope,
    isLoading: isHoroscopesLoading,
    zodiacData,
    handleBackClick,
    error,
  }
}
