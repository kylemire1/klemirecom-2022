import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import tailwindStylesheetUrl from './styles/tailwind.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&family=Poppins:wght@400;600&display=swap',
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/images/me.jpg',
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Kyle Lemire | Chicago-based Front End Engineer',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html
      lang='en'
      className={`h-full overflow-x-hidden text-[80%] md:text-[97%] lg:text-[100%]`}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className={`h-full overflow-x-hidden font-poppins text-lg`}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
