import { useCallback, useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export type UseRecaptchaHook = ({ action }: { action: string }) => {
  token: string | null
  handleReCaptchaVerify: () => Promise<void>
}
export const useRecaptcha: UseRecaptchaHook = ({ action }) => {
  const [token, setToken] = useState<string | null>(null)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.warn('Execute recaptcha not yet available')
      return
    }

    const token = await executeRecaptcha(action)
    setToken(token)
  }, [executeRecaptcha, action])

  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  return {
    token,
    handleReCaptchaVerify,
  }
}
