import sgMail from '@sendgrid/mail'

const API_KEY = process.env.SENDGRID_API_KEY

if (API_KEY) {
  sgMail.setApiKey(API_KEY)
}

export { sgMail }
