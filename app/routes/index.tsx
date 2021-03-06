import type { LinksFunction } from '@remix-run/node'
import { Layout } from '~/components'
import AboutBlurb from '~/components/about-blurb'
import ExperienceSection from '~/components/experience-section'
import HeroSection from '~/components/hero-section'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/me.jpg',
    },
  ]
}

export default function Index() {
  return (
    <Layout>
      <div className='container'>
        <HeroSection />
      </div>
      <main className='container mt-28'>
        <ExperienceSection />
        <AboutBlurb />
      </main>
    </Layout>
  )
}
