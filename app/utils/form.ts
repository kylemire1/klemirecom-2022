import { json } from '@remix-run/node'
import { ActionData } from '~/routes/contact'

export const encode = (data: Record<any, any>) => {
  if (!data) return ''
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const validateTextInput = (text: string, fieldName: string) => {
  if (text === '') {
    return `${fieldName} is required`
  }
}
export const validateEmail = (email: string) => {
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}', 'i')
  if (email === '') {
    return `Email is required`
  }
  if (!regex.test(email)) {
    return `Email is invalid`
  }
}

export const badRequest = (data: ActionData) => json(data, { status: 400 })
