import s from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.wrapBlock1}></div>
      <div className={s.wrapBlock2}></div>
      <div className={s.wrapBlock3}></div>
      <div className={s.wrapBlock4}></div>
      <div className={s.wrapBlock5}></div>
    </div>
  )
}
