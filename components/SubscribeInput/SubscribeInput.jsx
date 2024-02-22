import React from 'react'

const SubscribeInput = () => {
  return (
    <div className='flex mt-12 '>
      <input type='text' placeholder='yourmail@domain.com' className='px-3 w-[70%] h-12 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]' />
      <button className='bg-blue-900 p-2 rounded'>Subscribe</button>
    </div>
  )
}

export default SubscribeInput