import { useEffect, useState } from 'react'
import { zodiacSignsData } from '@/utils/zodiacData'
import { fetchZodiacDescription } from '@/api/api'
import { getLanguage } from '@/utils/languageUtils'

export const useZodiacContext = () => {
  const [zodiacData, setZodiacData] = useState<
    { sign: string; signEn: string; signRu: string; period: string; icon: string }[]
  >([])
  const [selectedSign, setSelectedSign] = useState<{
    sign: string
    signEn: string
    signRu: string | null
  } | null>(null)
  const [language, setLanguage] = useState<'ru' | 'en'>(getLanguage() || 'en')
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

  const handleSignSelect = (sign: string | null, signEn: string | null, signRu: string | null) => {
    setSelectedSign(
      sign && signEn
        ? {
            sign: sign,
            signEn: signEn,
            signRu: signRu || null,
          }
        : null
    )
  }

  const handleBackClick = () => {
    setSelectedSign(null)
  }

  const handleLanguageSwitch = () => {
    const newLanguage: 'ru' | 'en' = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLanguage)
  }

  return {
    language,
    handleLanguageSwitch,
    selectedSign,
    handleSignSelect,
    horoscope,
    isLoading,
    zodiacData,
    handleBackClick,
  }
}
