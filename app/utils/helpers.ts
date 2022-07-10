import type { MetaFunction } from '@remix-run/node'
import type { HtmlMetaDescriptor } from '@remix-run/react'

export const isDom = () => typeof window !== 'undefined'

export const generateMetaFunction = (
  config?: Partial<HtmlMetaDescriptor>
): MetaFunction => {
  function meta() {
    return {
      charset: config?.charset ?? 'utf-8',
      title: config?.title
        ? `Kyle Lemire | ${config?.title}`
        : 'Kyle Lemire | Chicago-based Front End Engineer',
      description:
        config?.description ??
        'Chicago based front end software engineer working with React in the media and broadcasting industry.',
      viewport: config?.viewport ?? 'width=device-width,initial-scale=1',
    } as const
  }

  return meta
}
