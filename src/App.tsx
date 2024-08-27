import { useZodiacContext } from '@/hook/useZodiacContext'
import { LanguageSwitcher } from '@/components/language-switcher/LanguageSwitcher'
import { ZodiacSignsList } from '@/components/zodiac-sign-list/ZodiacSignsList'
import { ZodiacDescriptionView } from '@/components/zodiac-description-view/ZodiacDescriptionView'
import s from './App.module.scss'

const App = () => {
  const {
    language,
    handleLanguageSwitch,
    selectedSign,
    handleSignSelect,
    horoscope,
    isLoading,
    zodiacData,
    handleBackClick,
  } = useZodiacContext()

  return (
    <div className={s.mainBlock}>
      <LanguageSwitcher language={language} onLanguageSwitch={handleLanguageSwitch} />
      {selectedSign && horoscope ? (
        <ZodiacDescriptionView
          signEn={selectedSign.signEn}
          signRu={selectedSign?.signRu || ''}
          horoscope={horoscope}
          language={language}
          handleBackClick={handleBackClick}
        />
      ) : (
        <ZodiacSignsList
          onSignSelect={handleSignSelect}
          language={language}
          zodiacData={zodiacData}
        />
      )}
      {isLoading && <div>Loading...</div>}
    </div>
  )
}

export default App
