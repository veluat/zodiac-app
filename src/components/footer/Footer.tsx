import { translations } from '@/utils/zodiacData.ts'
import s from './Footer.module.scss'

interface FooterProps {
  language: 'ru' | 'en'
}

export const Footer = ({ language }: FooterProps) => {
  const footerLabel = translations[language]?.footer || 'Horoscopes provided by'
  const footerLink = translations[language]?.footerLink || 'Ignio'

  return (
    <footer className={s.footer}>
      {footerLabel}
      <a href="https://ignio.com/" target="_blank">
        {footerLink}
      </a>
    </footer>
  )
}
