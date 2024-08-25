import axios, { AxiosResponse } from 'axios'

type ZodiacData = {
  horoscope: string
}

interface ZodiacRequest {
  sign: string
  language: 'original' | 'translated'
  period: 'today'
}

export const fetchZodiacDescription = async (
  sign: string,
  language: 'ru' | 'en',
  period: 'today'
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
    const { horoscope } = zodiacData
    if (horoscope) {
      return horoscope
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
