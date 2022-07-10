import type { ActionFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useActionData, useTransition } from '@remix-run/react'
import { Layout } from '~/components'
import SuccessAlert from '~/components/success-alert'
import { validateTextInput, validateEmail } from '~/utils/form'
import { sendMail } from '~/utils/mail.server'
import { passesSuccess, useRecaptcha, verifyToken } from '~/utils/recaptcha'
import Socials from '~/components/socials'

export type ActionData = {
  formError?: string
  fieldErrors?: {
    name: string | undefined
    email: string | undefined
    message: string | undefined
    token: string | undefined
  }
  fields?: {
    name: string
    email: string
    message: string | undefined
    token: string | undefined
  }
  success?: {
    message: string
  }
}
export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name')
  const email = body.get('email')
  const message = body.get('message')
  const token = body.get('token')

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    typeof token !== 'string'
  ) {
    return json({ formError: `Form not submitted correctly` }, { status: 400 })
  }

  const fieldErrors = {
    name: validateTextInput(name, 'Name'),
    email: validateEmail(email),
    message: validateTextInput(message, 'Message'),
    token: validateTextInput(token, 'Recaptcha Verification'),
  }

  const fields = { name, email, message, token }
  if (Object.values(fieldErrors).some(Boolean)) {
    return json({ fieldErrors, fields }, { status: 400 })
  }

  try {
    const result = await verifyToken(token)

    if (!passesSuccess(result)) {
      json({ formError: `reCAPTCHA verification failed` }, { status: 422 })
    }
  } catch (error) {
    json(
      { formError: `There was a problem communicating with the verification server.` },
      { status: 500 }
    )
  }

  try {
    await sendMail({ message, name, email })
  } catch (error) {
    json({ formError: `Problem sending email` }, { status: 500 })
  }

  return json(
    { fields, success: { message: 'Message sent successfully!' } },
    { status: 200 }
  )
}

export const meta: MetaFunction = () => {
  return {
    title: 'Contact',
  }
}

export default function ContactPage() {
  const actionData = useActionData<ActionData>()
  const transition = useTransition()
  const { token, handleReCaptchaVerify } = useRecaptcha({ action: 'contact' })

  return (
    <Layout>
      <main id='talk' className='container grid grid-cols-12 items-center'>
        <div className="h-max lg:py-18 relative col-span-full rounded-md bg-brand-light px-8 py-16 before:absolute before:-top-80 before:-left-72 before:-z-10 before:h-[575px] before:w-[634px] before:bg-[url('/images/circles-vector.svg')] after:absolute after:-right-32 after:-bottom-[350px]  after:-z-10 after:h-[650px] after:w-[575px] after:bg-[url('/images/circles-solid.svg')] after:bg-no-repeat md:col-span-8 md:col-start-3 md:px-14 lg:after:block xl:py-24 xl:px-24">
          <h2 className='mb-2 text-3xl font-semibold md:text-4xl'>
            Looking for me?{' '}
            <span aria-hidden role='presentation'>
              👀
            </span>
          </h2>
          <p className='pb-2'>Here are a few places you can say &#8220;Hi!&#8221;</p>
          <Socials />
          <div className='w-full border-t-2 border-solid h-1' />
          <h3 className='mt-8 mb-2 text-xl font-semibold md:text-2xl'>
            Not the DM'ing type?
          </h3>
          <p className='mb-4'>Shoot me an email instead!</p>
          {!actionData?.success ? (
            <Form className='block' method='post'>
              <fieldset disabled={transition.state === 'submitting'}>
                <input type='hidden' value={token ?? ''} name='token' />
                <div>
                  <label>
                    Your Name:
                    <br />
                    <input
                      type='text'
                      name='name'
                      defaultValue={actionData?.fields?.name}
                      aria-invalid={Boolean(actionData?.fieldErrors?.name) || undefined}
                      aria-errormessage={
                        actionData?.fieldErrors?.name ? 'name-error' : undefined
                      }
                      onBlur={handleReCaptchaVerify}
                    />
                  </label>
                  {actionData?.fieldErrors?.name ? (
                    <p className='form-validation-error' role='alert' id='name-error'>
                      {actionData.fieldErrors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label>
                    Your Email:
                    <br />
                    <input
                      type='email'
                      name='email'
                      defaultValue={actionData?.fields?.email}
                      aria-invalid={
                        Boolean(actionData?.fieldErrors?.email) || undefined
                      }
                      aria-errormessage={
                        actionData?.fieldErrors?.email ? 'email-error' : undefined
                      }
                      onBlur={handleReCaptchaVerify}
                    />
                  </label>
                  {actionData?.fieldErrors?.email ? (
                    <p className='form-validation-error' role='alert' id='email-error'>
                      {actionData.fieldErrors.email}
                    </p>
                  ) : null}
                </div>
                <div className='mb-2'>
                  <label>
                    Message:
                    <br />
                    <textarea
                      onBlur={handleReCaptchaVerify}
                      name='message'
                      defaultValue={actionData?.fields?.message}
                      aria-invalid={
                        Boolean(actionData?.fieldErrors?.message) || undefined
                      }
                      aria-errormessage={
                        actionData?.fieldErrors?.message ? 'message-error' : undefined
                      }
                    ></textarea>
                  </label>
                  {actionData?.fieldErrors?.message ? (
                    <p
                      className='form-validation-error'
                      role='alert'
                      id='message-error'
                    >
                      {actionData.fieldErrors.message}
                    </p>
                  ) : null}
                </div>
                {actionData?.fieldErrors?.message ? (
                  <p className='form-validation-error' role='alert' id='message-error'>
                    {actionData.fieldErrors.token}
                  </p>
                ) : null}
                <div>
                  <button
                    className='block text-center button-primary w-full mt-0'
                    type='submit'
                  >
                    {transition.state === 'submitting' ? 'Sending...' : 'Send'}
                  </button>
                </div>
                {actionData?.success?.message ? (
                  <p>{actionData.success.message}</p>
                ) : null}
              </fieldset>
            </Form>
          ) : (
            <div>
              <SuccessAlert message={actionData.success.message} />
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}
