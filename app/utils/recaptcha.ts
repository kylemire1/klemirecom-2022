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

type VerifyTokenReturnValue = Promise<{
  success: boolean
  challenge_ts?: string
  hostname?: string
  score?: number
  action?: string
  'error-codes'?: Array<string>
}>

export const verifyToken = async (token: string): VerifyTokenReturnValue => {
  return await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'post',
    }
  ).then((r) => r.json())
}

export const passesSuccess = (result: Awaited<VerifyTokenReturnValue>) =>
  !result.success || (result?.score ?? 0) < 0.5

export const RECAPTCHA_SCRIPT_HREF =
  'https://www.gstatic.com/recaptcha/releases/4rwLQsl5N_ccppoTAwwwMrEN/recaptcha__en.js'
export const RECAPTCHA_INTEGRITY =
  'sha384-o1nfdUm9cV7Sx6HxXDsnady1EGmCBTwza/JTA6OSowyOK+wq0YF0+F9jejHVacaR'
