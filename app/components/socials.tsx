import LinkedIn from './svg/linkedin'
import Twitter from './svg/twitter'

const Socials = () => {
  return (
    <div className='mb-8'>
      <ul className='flex items-center gap-4'>
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
  )
}

export default Socials
