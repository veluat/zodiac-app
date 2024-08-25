import axios, { AxiosResponse } from 'axios'

type ZodiacSign = {
  sign: string
  name: string
  icon: string
  horoscope: string
  ru: string
  en: string
}

type ZodiacData = {
  [key: string]: Omit<ZodiacSign, 'name' | 'icon'>
}

interface ZodiacRequest {
  sign: string
  language: 'original' | 'translated'
  period: 'today'
}

export const fetchZodiacDescription = async (
  sign: string,
  language: 'ru' | 'en',
  period: 'today' = 'today'
): Promise<string | null> => {
  try {
    const request: ZodiacRequest = {
      sign,
      language: language === 'ru' ? 'original' : 'translated',
      period,
    }
    const response: AxiosResponse<ZodiacData> = await axios.post(
      'https://poker247tech.ru/get_horoscope/',
      request
    )
    const zodiacData = response.data
    if (zodiacData[request.language]) {
      return zodiacData[request.language].horoscope
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
