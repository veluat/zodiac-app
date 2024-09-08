export const translateText = async (text: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=${encodeURIComponent(
        text
      )}`
    )

    if (!response.ok) {
      console.error('Translation failed', await response.json())
      return text
    }

    const data = await response.json()

    const translations = data[0].map((item: string) => item[0]).filter(Boolean)

    return translations.join(' ')
  } catch (error) {
    console.error('Translation error:', error)
    return text
  }
}
