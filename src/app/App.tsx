import { useZodiacContext } from '@/hook/useZodiacContext.ts'
import { ZodiacSignsList } from '@/components/shared/zodiac-sign-list/ZodiacSignsList.tsx'
import { ZodiacDescriptionView } from '@/components/shared/zodiac-description-view/ZodiacDescriptionView.tsx'
import { Header } from '@/components/header/Header.tsx'
import { Footer } from '@/components/footer/Footer.tsx'
import { ToggleButton } from '@/components/shared/toggle-button/ToggleButton.tsx'
import { Loader } from '@/components/shared/loader/Loader.tsx'
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

  const isDescriptionView = !!selectedSign

  return (
    <div className={s.mainBlock}>
      <Header
        handleBackClick={handleBackClick}
        language={language}
        onLanguageSwitch={handleLanguageSwitch}
        showBackButton={isDescriptionView}
      />
      {isLoading && <Loader />}
      {isDescriptionView ? (
        <ZodiacDescriptionView
          signEn={selectedSign.signEn}
          signRu={selectedSign.signRu || ''}
          horoscope={horoscope || <Loader />}
          language={language}
          icon={selectedSign.icon}
        />
      ) : (
        <ZodiacSignsList
          onSignSelect={handleSignSelect}
          language={language}
          zodiacData={zodiacData}
        />
      )}
      <ToggleButton />
      {isDescriptionView && <Footer language={language} />}
    </div>
  )
}

export default App
