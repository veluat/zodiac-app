import { useEffect, useState } from 'react'
import { zodiacSignsData } from '@/utils/zodiacData'
import { translateText } from '@/utils/translateText.ts'

interface Horoscope {
  today: string
}

interface Horoscopes {
  [key: string]: Horoscope
}

export const useHoroscopes = () => {
  const [horoscopes, setHoroscopes] = useState<Horoscopes>({})
  const [translatedHoroscopes, setTranslatedHoroscopes] = useState<Horoscopes>({})
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchHoroscopes = async () => {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          'http://img.ignio.com/r/export/utf/xml/daily/com.xml'
        )}`
      )
      const data = await response.json()
      const xmlContent = data.contents

      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlContent, 'text/xml')

      const newHoroscopes: Horoscopes = {}
      const textsToTranslate: string[] = []

      for (const { sign } of zodiacSignsData) {
        const signNode = xmlDoc.getElementsByTagName(sign)[0]

        if (signNode) {
          const todayNodes = signNode.getElementsByTagName('today')
          const todayTexts = Array.from(todayNodes)
            .map(node => node.textContent || '')
            .filter(text => text)

          const combinedTodayText = todayTexts.join(' ').trim()
          newHoroscopes[sign] = { today: combinedTodayText }
          textsToTranslate.push(combinedTodayText)
        }
      }
      setHoroscopes(newHoroscopes)

      const translatedTexts = await Promise.all(textsToTranslate.map(text => translateText(text)))
      const newTranslatedHoroscopes: Horoscopes = {}

      let index = 0
      for (const { sign } of zodiacSignsData) {
        newTranslatedHoroscopes[sign] = { today: translatedTexts[index++] }
      }

      setTranslatedHoroscopes(newTranslatedHoroscopes)
    } catch (err) {
      setError('Не удалось загрузить гороскопы')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchHoroscopes()
  }, [])

  return { horoscopes, translatedHoroscopes, isLoading, error }
}
