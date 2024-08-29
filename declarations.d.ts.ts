declare module './declarations.d.ts' {
  interface TelegramWebApp {
    initData: string
    initDataUnsafe: unknown
    version: string
    MainButton: {
      text: string
      show: () => void
      hide: () => void
      onClick: (callback: () => void) => void
    }
    isWebView: boolean
    ready: () => void
  }

  export function useTelegram(): { Telegram: TelegramWebApp }
}
