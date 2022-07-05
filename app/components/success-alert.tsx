import { CheckCircleIcon } from '@heroicons/react/solid'

export const SuccessAlert = ({ message }: { message: string }) => {
  return (
    <div className='rounded-md bg-green-100 p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <CheckCircleIcon className='h-5 w-5 text-green-400' aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <p className='text-sm font-medium text-black'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessAlert
