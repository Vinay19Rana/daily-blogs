import Image from 'next/image'
import React from 'react'
import Phone from '../assets/smphone.png'

const LatestNewsLetter = () => {
  return (
    <div className='bg-gray-300 w-[100%] h-12 flex justify-center items-center'>
      <Image src={Phone} height={35}/>
      <h2 class="ml-2 text-lg font-bold">Latest NewsLetter : <span className='font-medium'>Airbus end the plane ...</span></h2>
    </div>
  )
}

export default LatestNewsLetter