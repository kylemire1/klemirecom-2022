export type EnvType = {
  RECAPTCHA_SITE_KEY: string
}

declare global {
  interface Window {
    ENV: EnvType
  }
}

export {}
