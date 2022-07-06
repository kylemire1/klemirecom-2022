import sgMail from '@sendgrid/mail'

const API_KEY = process.env.SENDGRID_API_KEY

if (API_KEY) {
  sgMail.setApiKey(API_KEY)
}

type SendMailArgs = { message: string; name: string; email: string }
const sendMail = async ({ message, name, email }: SendMailArgs) => {
  return await sgMail.send({
    to: process.env.CONTACT_FORM_RECIPIENT ?? '',
    from: process.env.VERIFIED_SENDER_EMAIL ?? '',
    subject: 'New Contact Form Submission from Klemire.com',
    text: message,
    html: `<ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Message: ${message}</li></ul>`,
  })
}

export { sgMail, sendMail }
