import type { MetaFunction } from '@remix-run/node'
import { Layout } from '~/components'
import LinkedIn from '~/components/svg/linkedin'
import Twitter from '~/components/svg/twitter'

export const meta: MetaFunction = () => {
  return {
    title: 'Contact',
  }
}

export default function ContactPage() {
  return (
    <Layout>
      <main className='container grid grid-cols-12 h-[80vh] items-center'>
        <div className="h-max lg:py-18 relative col-span-full rounded-md bg-brand-light px-8 py-16 before:absolute before:-top-80 before:-left-72 before:-z-10 before:h-[575px] before:w-[634px] before:bg-[url('/images/circles-vector.svg')] after:absolute after:-right-32 after:-bottom-[245px]  after:-z-10 after:h-[650px] after:w-[575px] after:bg-[url('/images/circles-solid.svg')] after:bg-no-repeat md:col-span-6 md:col-start-4 md:px-14 lg:after:block xl:py-24 xl:px-24">
          <h2 className='mb-2 text-3xl font-semibold md:text-4xl'>Let's talk!</h2>
          <p className='pb-8'>Here are a few places you can find me.</p>
          <div>
            <ul>
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
        </div>
      </main>
    </Layout>
  )
}
