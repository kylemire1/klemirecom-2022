import React from 'react'

type ExperienceItemProps = React.PropsWithChildren<{
  duration: string
  jobTitle: string | JSX.Element
  employer?: string
  noBorder?: boolean
}>

const ExperienceItem = ({
  duration,
  jobTitle,
  employer,
  children,
}: ExperienceItemProps) => {
  return (
    <li
      className={`grid grid-cols-12 items-center border-t border-solid  border-brand-medium pb-8 pt-8 last:border-b`}
    >
      <div className='col-span-full lg:col-span-6'>
        <h4 className='mb-4 lg:mb-0'>
          <span className='text-primary'>{duration} </span>
          <br />
          <span className='text-2xl font-bold'>
            {jobTitle}{' '}
            {employer ? (
              <>
                <span className='text-highlight'>@</span> {employer}
              </>
            ) : null}
          </span>
        </h4>
      </div>
      <div className='col-span-full lg:col-span-6'>
        <ul className='list-disc space-y-4 pl-6'>{children}</ul>
      </div>
    </li>
  )
}

export default ExperienceItem
