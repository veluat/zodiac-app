import dark_img from '@/assets/theme/dark.svg'
import light_img from '@/assets/theme/light.svg'
import { useTheme } from '@/hook/useTheme.ts'
import s from './ToggleButton.module.scss'

export const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  const imgSrc = theme === 'theme-light' ? dark_img : light_img

  return (
    <button onClick={toggleTheme} className={s.toggleButton}>
      <img
        src={imgSrc}
        alt={theme === 'theme-light' ? 'Dark theme' : 'Light theme'}
        className={s.iconSvg}
        height={35}
        width={35}
      />
    </button>
  )
}
