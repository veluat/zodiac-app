import { useZodiacContext } from '@/hook/useZodiacContext'
import { ZodiacSignsList } from '@/components/zodiac-sign-list/ZodiacSignsList'
import { ZodiacDescriptionView } from '@/components/zodiac-description-view/ZodiacDescriptionView'
import s from './App.module.scss'
import { Header } from '@/components/header/Header.tsx'

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

  const isDescriptionView = !!(selectedSign && horoscope)

  return (
    <div className={s.mainBlock}>
      <Header
        handleBackClick={handleBackClick}
        language={language}
        onLanguageSwitch={handleLanguageSwitch}
        showBackButton={isDescriptionView}
      />

      {isDescriptionView ? (
        <ZodiacDescriptionView
          signEn={selectedSign.signEn}
          signRu={selectedSign?.signRu || ''}
          horoscope={horoscope}
          language={language}
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
