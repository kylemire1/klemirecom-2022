import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches,
} from '@remix-run/react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import type { EnvType } from 'window'
import tailwindStylesheetUrl from './styles/tailwind.css'
import { generateMetaFunction } from './utils/helpers'

type LoaderData = {
  ENV: EnvType
}
export async function loader() {
  return json({
    ENV: {
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  })
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    {
      rel: 'preload',
      href: '/fonts/Poppins/Poppins-Regular.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      href: '/fonts/Poppins/Poppins-SemiBold.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
  ]
}

export const meta = generateMetaFunction()

export default function App() {
  const data = useLoaderData<LoaderData>()
  const matches = useMatches()
  const isContactPage = matches.some((m) => /routes\/contact/i.test(m.id))

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={data.ENV.RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
    >
      <html
        lang='en'
        className={`text-black h-full overflow-x-hidden text-[80%] md:text-[97%] lg:text-[100%]`}
      >
        <head>
          <Meta />
          <Links />
        </head>
        <body className={`h-full overflow-x-hidden font-poppins text-lg`}>
          {!isContactPage ? (
            <style
              dangerouslySetInnerHTML={{
                __html: `.grecaptcha-badge {visibility: hidden !important;}`,
              }}
            />
          ) : null}
          <Outlet />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
          <LiveReload />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </GoogleReCaptchaProvider>
  )
}
