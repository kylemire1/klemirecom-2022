import { DocumentTextIcon } from '@heroicons/react/solid'
import ExperienceItem from './experience-item'

const ExperienceSection = () => {
  return (
    <div
      className={`lg:py-18 relative rounded-md bg-brand-light px-8 py-16 before:absolute before:-top-80 before:-left-72 before:-z-10 before:h-[575px] before:w-[634px] before:bg-[url('/images/circles-vector.svg')] after:absolute after:-right-32 after:-bottom-[512px] after:-z-10  after:h-[672px] after:w-[575px] after:bg-[url('/images/circles-solid.svg')] after:bg-no-repeat md:px-14 lg:after:block xl:py-24 xl:px-28`}
    >
      <h3 id='experience' className='mb-12 text-3xl font-bold md:text-4xl lg:mb-24'>
        Some recent experience
      </h3>
      <ul>
        <ExperienceItem
          duration='Sep 2021 - Present'
          jobTitle='Senior Software Engineer'
          employer='WideOrbit'
        >
          <li>
            Developing enterprise software front ends for the media and broadcast
            industry using React.
          </li>
          <li>
            Mentoring fellow developers and giving guidance toward modern practices.
          </li>
          <li>Interviewing prospective hires to find diverse engineering talent.</li>
        </ExperienceItem>
        <ExperienceItem
          duration='Dec 2020 - Sep 2021'
          jobTitle={
            <>
              Independent Web Development <span className='text-highlight'>&amp;</span>{' '}
              Consulting
            </>
          }
        >
          <li>
            Built a Jamstack site that consumes data from decoupled WordPress with
            GraphQL and uses lambda functions to enable form submissions.
          </li>
          <li>
            Recorded over a dozen hours of instructional React video content for a
            client, supplemented with face-to-face training sessions.
          </li>
          <li>
            Built a real-time application with React and Node.js that allows live-stream
            viewers to interact with a character on the screen using chat commands.
          </li>
        </ExperienceItem>
        <ExperienceItem
          duration='Feb 2020 - Nov 2020'
          jobTitle='Web Developer'
          employer='Alpine Home Air'
        >
          <li>
            Worked on the company's re-designed e-commerce platform using React and
            server-side rendering to deliver great performance without sacrificing
            search engine optimization.
          </li>
          <li>
            Learned Lucee / Cold Fusion on the job to support the company's legacy
            codebase while the new site was developed.
          </li>
          <li>
            Implemented the re-designed front ends of industry-first tools, such as an
            HVAC room configurator and operating cost calculator.
          </li>
        </ExperienceItem>
      </ul>
      <a
        href='/resume-2022.pdf'
        download='Resume of Kyle Lemire'
        className='button-primary mt-24'
      >
        Download full resume <DocumentTextIcon width='1.5rem' />
      </a>
    </div>
  )
}

export default ExperienceSection
