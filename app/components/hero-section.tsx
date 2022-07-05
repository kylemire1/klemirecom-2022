import { ArrowDownIcon } from '@heroicons/react/solid'
import { Link } from '@remix-run/react'
import HeroPortrait from './hero-portrait'

const HeroSection = () => {
  return (
    <div className='relative grid min-h-hero grid-cols-12'>
      <div className='col-span-full space-y-6 xl:col-span-8 animate-in slide-in-from-bottom-2  fade-in-0  duration-1000 ease-out'>
        <h2 className='mt-28 text-4xl font-semibold leading-snug md:text-5xl md:leading-snug'>
          Approaching front end engineering with{' '}
          <span className='text-highlight'>passion</span> and{' '}
          <span className='text-primary'>enthusiasm</span>{' '}
          <span aria-label='confetti' role='img'>
            🎉
          </span>
        </h2>
        <p className='col-span-full max-w-prose 2xl:col-span-4 2xl:max-w-lg'>
          I'm based in Chicago and am currently busy raising a Border Collie with my
          partner and working as a Senior Software Engineer at WideOrbit.
        </p>
        <div className='flex gap-4'>
          <Link to='#about' className='button-highlight'>
            <ArrowDownIcon width='1.5rem' />
            Learn more about me
          </Link>
          <Link to='/contact' className='button-primary'>
            Get in touch
          </Link>
        </div>
      </div>
      <div
        role='img'
        aria-label='Kyle Lemire smiling among colored circles'
        className='absolute -right-32 top-44 -z-10 hidden lg:block xl:top-0 2xl:-top-14 2xl:-right-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out'
      >
        <HeroPortrait />
      </div>
    </div>
  )
}

export default HeroSection
