import sprite from '@/assets/theme/sprite.svg'
import { useTheme } from '@/hook/useTheme.ts'
import s from './ToggleButton.module.scss'

export const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  const id = theme === 'theme-light' ? 'dark' : 'light'

  return (
    <button onClick={toggleTheme} className={s.toggleButton}>
      <svg className={s.iconSvg} height={50} width={50}>
        <use xlinkHref={`${sprite}#${id}`} />
      </svg>
    </button>
  )
}
