import Link from 'next/link'

import React from 'react'
import Image from 'next/image'
import { data } from '@/utils/Constants'
const imgSrc="https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const TopFeeds = () => {
  return (
    <div className="flex px-32 py-10 w-[100%] gap-7">
    <div className="w-[50%] h-auto ">
      <Image src={imgSrc} height={500} width={500} className="w-[100%] rounded-[1.2rem] px-10 py-2"/>
      <div className='px-10'>
      <Link href={'/'} className=' text-blue-700 text-lg font-semibold'>Crypto</Link>
      <h2 className='text-3xl font-semibold mt-4'>Bitcoin breaks $1t in market cap again</h2>
      <p className='text-2xl mt-3'>If crypto were a publicly traded company, it would be the fourth-largest in the world.</p>
      <p className='text-md mt-3 font-semibold'>Hartej Singh</p>
    </div>
    </div>
    <div className="w-[50%]">
    {data.map((item=>(
        <div className="flex items-center gap-4 w-[100%]" key={item.title}>
          <div className="p-4 w-[60%]">
            <Link href={'/'} className=' text-blue-700 text-lg '>{item.category}</Link>
            <h2 className='text-2xl font-semibold mt-2'>{item.title}</h2>
            <p className='text-md mt-1'>{item.description}</p>
            <p className='text-md font-semibold mt-1'>{item.author}</p>
          </div>
          <Image src={item.image} height={100} width={100} unoptimized className="w-[250px] h-[150px] p-4 py-2 rounded-[1.2rem] object-cover object-top"/>
        </div>
    )))}
    </div>
  </div>
  )
}

export default TopFeeds