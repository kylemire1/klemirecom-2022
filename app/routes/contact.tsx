import type { ActionFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { Layout } from '~/components'
import LinkedIn from '~/components/svg/linkedin'
import Twitter from '~/components/svg/twitter'
import { validateTextInput, validateEmail, badRequest, encode } from '~/utils/form'

const FORM_NAME = 'contact'

export type ActionData = {
  formError?: string
  fieldErrors?: {
    name: string | undefined
    email: string | undefined
    message: string | undefined
  }
  fields?: {
    name: string
    email: string
    message: string | undefined
  }
}
export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const name = body.get('name')
  const email = body.get('email')
  const message = body.get('message')

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return json({ formError: `Form not submitted correctly` }, { status: 400 })
  }

  const fieldErrors = {
    name: validateTextInput(name, 'Name'),
    email: validateEmail(email),
    message: validateTextInput(message, 'Message'),
  }
  const fields = { name, email, message }
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields })
  }

  try {
    const formBody = encode({
      'form-name': FORM_NAME,
      ...fields,
    })
    console.log(formBody)
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody,
    })
    console.log(res)
  } catch (error) {
    console.error(error)
  }

  return json(fields, { status: 200 })
}

export const meta: MetaFunction = () => {
  return {
    title: 'Contact',
  }
}

export default function ContactPage() {
  const actionData = useActionData<ActionData>()
  return (
    <Layout>
      <main className='container grid grid-cols-12 h-[80vh] items-center'>
        <div className="h-max lg:py-18 relative col-span-full rounded-md bg-brand-light px-8 py-16 before:absolute before:-top-80 before:-left-72 before:-z-10 before:h-[575px] before:w-[634px] before:bg-[url('/images/circles-vector.svg')] after:absolute after:-right-32 after:-bottom-[350px]  after:-z-10 after:h-[650px] after:w-[575px] after:bg-[url('/images/circles-solid.svg')] after:bg-no-repeat md:col-span-6 md:col-start-4 md:px-14 lg:after:block xl:py-24 xl:px-24">
          <h2 className='mb-2 text-3xl font-semibold md:text-4xl'>Let's talk!</h2>
          <p className='pb-2'>Here are a few places you can find me.</p>
          <div className='mb-8'>
            <ul className='flex gap-4'>
              <li>
                <a
                  className='flex gap-2 items-center'
                  href='https://twitter.com/KyleLemire1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter width={24} /> Twitter
                </a>
              </li>
              <li>
                <a
                  className='flex gap-2'
                  href='https://www.linkedin.com/in/kyle-lemire-9967a1149/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedIn width={24} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full border-t-2 border-solid h-1' />
          <h3 className='mt-8 mb-2 text-xl font-semibold md:text-2xl'>
            Not the DM'ing type?
          </h3>
          <p className='mb-4'>Shoot me an email instead!</p>
          <Form replace className='block' name={FORM_NAME} method='post'>
            <input type='hidden' name='form-name' value={FORM_NAME} />
            <p>
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
                />
              </label>
              {actionData?.fieldErrors?.name ? (
                <p className='form-validation-error' role='alert' id='name-error'>
                  {actionData.fieldErrors.name}
                </p>
              ) : null}
            </p>
            <p>
              <label>
                Your Email:
                <br />
                <input
                  type='email'
                  name='email'
                  defaultValue={actionData?.fields?.email}
                  aria-invalid={Boolean(actionData?.fieldErrors?.email) || undefined}
                  aria-errormessage={
                    actionData?.fieldErrors?.email ? 'email-error' : undefined
                  }
                />
              </label>
              {actionData?.fieldErrors?.email ? (
                <p className='form-validation-error' role='alert' id='email-error'>
                  {actionData.fieldErrors.email}
                </p>
              ) : null}
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea
                  name='message'
                  defaultValue={actionData?.fields?.message}
                  aria-invalid={Boolean(actionData?.fieldErrors?.message) || undefined}
                  aria-errormessage={
                    actionData?.fieldErrors?.message ? 'message-error' : undefined
                  }
                ></textarea>
              </label>
              {actionData?.fieldErrors?.message ? (
                <p className='form-validation-error' role='alert' id='message-error'>
                  {actionData.fieldErrors.message}
                </p>
              ) : null}
            </p>
            <p>
              <button className='block text-center button-primary w-full' type='submit'>
                Send
              </button>
            </p>
          </Form>
        </div>
      </main>
    </Layout>
  )
}
