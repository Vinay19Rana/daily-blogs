import React from 'react'
import SubscribeInput from '../SubscribeInput/SubscribeInput'
import Image from 'next/image'
import Link from 'next/link'

const imgUrl="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const TopSection = () => {
  return (
    <div className="flex w-[100%]">
    <div className="bg-blue-500 text-white h-[350px] w-[80%] flex flex-col items-center justify-center ">
        <div className="w-[50%]">
          <h1 className="text-5xl font-bold leading-[60px] font-['Protest_Strike']">Become smarter in just 5 minutes</h1>
          <h3 className="text-xl">Get the daily email that makes reading the news enjoyable. Stay informed and entertained, for free.</h3>
          <SubscribeInput/>
        </div>
    </div>
    <div className="h-[350px] w-[20%] p-4">
        <Image src={imgUrl} width={100} height={100} unoptimized className='bg-cover w-[100%] h-auto  rounded-xl'/>
        <div className='pt-2'>
          <Link href={'/'} className=' text-blue-700 text-md'>Home to kaleidoscopic</Link>
          <h2 className='text-ms font-semibold'>Inflation is in retreat, but prices still bite</h2>
          <p className='text-sm whitespace-nowrap'>Inflation isn't entirely tamed and most stuff ain't cheap.</p>
        </div>
    </div>
   </div>
  )
}

export default TopSection