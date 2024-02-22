import { imgSrc, pils, storiesData } from '@/utils/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Stories = () => {
  return (
    <div className="flex px-36 py-10 w-[100%] gap-7">
      <div className="w-[50%] h-auto ">
        <div className="flex justify-between items-center p-3 border-b-[1px] border-gray-400">
          <h2 className="text-2xl font-bold">Latest Stories</h2>
          <Link href={'/'} className="text-blue-700 underline">All Stories</Link>
        </div>
        {storiesData.map((item=>(
        <div className="flex items-center gap-4 w-[100%] mt-5" key={item.title}>
          <Image src={item.image} height={100} width={100} unoptimized className="w-[250px] h-[150px] p-4 py-2 rounded-[1.2rem] object-cover object-top"/>
          <div className="p-4 w-[80%]">
            <Link href={'/'} className=' text-blue-700 text-lg '>{item.category}</Link>
            <h2 className='text-xl font-medium mt-2'>{item.title}</h2>
            {/* <p className='text-md mt-1'>{item.description}</p> */}
            <p className='text-sm font-semibold mt-1'>{item.author}</p>
          </div>
          
        </div>
    )))}
      </div>
      <div className="w-[50%] h-auto ">
      <div className="flex justify-between p-3 border-b-[1px] border-gray-400">
          <h2 className="text-2xl font-bold">Latest Podcast Episods</h2>
        </div>
        <div className="flex justify-between gap-5 mt-4 h-auto w-[100%]">
          <div className="w-[50%]">
            <Image src={imgSrc} height={500} width={500} className="w-[100%] h-[300px] rounded-[1.2rem]  py-2"/>
            <div className=''>
              <Link href={'/'} className=' text-blue-700 text-lg font-semibold'>BOSSY</Link>
              <h2 className='text-xl font-semibold mt-4'>Scorecards 101: How to Track if You’re Crushing It or Messing Up</h2>
              <p className='text-md mt-3'>This episode of Bossy discusses why you need to start implementing a scorecard ASAP, provides a template to set up your team for success, and how to get an instant promotion at work.</p>
            </div>
          </div>
          <div className="w-[50%]">
            <Image src={imgSrc} height={500} width={500} className="w-[100%] h-[300px] rounded-[1.2rem] py-2"/>
              <div className=''>
                <Link href={'/'} className=' text-blue-700 text-lg font-semibold'>FOUNDER'S JOURNAL</Link>
                <h2 className='text-xl font-semibold mt-4'>Uncovering Secrets from Amazon’s 1997 Shareholder Letter</h2>
                <p className='text-md mt-3'>Alex Lieberman travels back to 1997 to examine Amazon's first shareholder letter to share its biggest lessons for entrepreneurs as much of its vision and focus from 1997 helped turn it into the e-commerce giant it is today.</p>
              </div>
          </div>
        </div>
        <div className="mt-7">
        <h2 className="text-2xl font-bold">Explore Topics</h2>
        <div className="mt-5">
          {pils.map((item)=>(
            <span className="border-[1px] border-black text-xl font-semibold p-2 px-4 rounded-2xl inline-block mx-2 mt-4 cursor-pointer hover:text-white hover:bg-blue-500 hover:border-blue-500" key={item}>{item}</span>
          ))}
        </div>
          <section className="border-[1px] border-black relative p-5 mt-10 rounded">
            <h2 className="absolute top-[-10%] bg-global px-2 text-xl font-semibold">Follow Morning Brew</h2>
            <p className="mt-1 w-[80%]">Morning Brew delivers quick and insightful updates about the business world every day of the week from Wall St. to Silicon Valley.</p>
          <div className="text-4xl mt-5 flex gap-4">
            <i class="ri-twitter-fill cursor-pointer" ></i>
            <i class="ri-linkedin-fill cursor-pointer"></i>
            <i class="ri-facebook-fill cursor-pointer"></i>
            <i class="ri-youtube-fill cursor-pointer"></i>
            <i class="ri-instagram-fill cursor-pointer"></i>
          </div>
          </section>
        <div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Stories