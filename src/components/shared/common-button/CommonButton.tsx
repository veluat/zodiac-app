import s from './CommonButton.module.scss'

interface CommonButtonProps {
  onClick: () => void
  title: string
}

export const CommonButton = ({ title, onClick }: CommonButtonProps) => {
  return (
    <button className={s.commonButton} onClick={onClick}>
      <span className={s.buttonText}>{title}</span>
    </button>
  )
}
