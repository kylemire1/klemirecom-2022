import { ArrowRightIcon } from '@heroicons/react/solid'
import { Link } from '@remix-run/react'

const AboutBlurb = () => {
  return (
    <div id='about' className='mt-16 grid grid-cols-12 lg:mt-24'>
      <div className='col-span-full rounded-lg border border-solid border-primary bg-white py-12 px-12 lg:col-span-7   xl:py-28 xl:px-32'>
        <h5 className='mb-8 text-3xl font-semibold leading-snug md:text-4xl md:leading-snug'>
          <span className='block text-highlight'>Hey there! I'm Kyle Lemire. </span>I
          love to build accessible software with React.{' '}
          <div className='inline-block whitespace-nowrap'>
            <span aria-label='Love' role='img'>
              💜
            </span>{' '}
            <span aria-label='React' role='img'>
              ⚛️
            </span>
          </div>
        </h5>
        <p className='mb-8 leading-relaxed'>
          I have been a front end engineer for over 4 years, and in that time I have
          found a passion for the human side of software. I feel most at-home when I am
          teaching another developer a subject I am excited about or testing UI
          components to make sure they are accessible to users of any ability.
        </p>
        <Link className='button-highlight' to='/contact'>
          Think we could work together? <ArrowRightIcon width='1.5rem' />
        </Link>
      </div>
    </div>
  )
}

export default AboutBlurb
