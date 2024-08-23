import axios, { AxiosResponse } from 'axios'

type ZodiacSign = {
  sign: string
  name: string
  icon: string
  description: {
    ru: string
    en: string
  }
}

type ZodiacData = {
  [key: string]: Omit<ZodiacSign, 'name' | 'icon'>
}

interface ZodiacRequest {
  language: 'ru' | 'en'
  period: 'today'
}

export const fetchZodiacDescription = async (
  language: 'ru' | 'en' = 'ru',
  period: 'today' = 'today'
): Promise<string | null> => {
  try {
    const request: ZodiacRequest = {
      language,
      period,
    }
    const response: AxiosResponse<ZodiacData> = await axios.post(
      'https://poker247tech.ru/get_horoscope/',
      request
    )

    const zodiacData = response.data
    if (zodiacData[language]) {
      return zodiacData[language].description[language]
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
