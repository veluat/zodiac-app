import React, { useState, useEffect } from 'react'
import { fetchZodiacDescription } from '@/services/api'

const ZodiacDescription: React.FC = () => {
  const [sign, setSign] = useState<string>('aries')
  const [language, setLanguage] = useState<'ru' | 'en'>('ru')
  const [description, setDescription] = useState<string | null>(null)

  useEffect(() => {
    fetchZodiacDescription(sign, language, 'today').then(setDescription)
  }, [sign, language])

  const handleSignChange = (newSign: string) => {
    setSign(newSign)
  }

  return (
    <div>
      <h2>{sign}</h2>
      {description ? <p>{description}</p> : <p>Loading...</p>}
      <button onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}>Switch Language</button>
      <div>
        <button onClick={() => handleSignChange('aries')}>Aries</button>
        <button onClick={() => handleSignChange('taurus')}>Taurus</button>
        {/* Add more sign buttons as needed */}
      </div>
    </div>
  )
}

export default ZodiacDescription
