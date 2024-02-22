import React from 'react'
import SubscribeInput from './SubscribeInput/SubscribeInput'

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white h-[350px] w-[100%] flex flex-col items-center justify-center ">
        <div className="w-[40%]">
          <h1 className="text-5xl font-bold leading-[60px] font-['Protest_Strike']">Become smarter in just 5 minutes</h1>
          <h3 className="text-xl">Get the daily email that makes reading the news enjoyable. Stay informed and entertained, for free.</h3>
          <SubscribeInput/>
        </div>
      </div>
      <div className='flex justify-between items-start px-[20%] py-5 '>
        <div>
          <h5>Follow Us</h5>
          <div className="text-4xl mt-5 flex gap-4">
            <i class="ri-twitter-fill cursor-pointer" ></i>
            <i class="ri-linkedin-fill cursor-pointer"></i>
            <i class="ri-facebook-fill cursor-pointer"></i>
            <i class="ri-youtube-fill cursor-pointer"></i>
            <i class="ri-instagram-fill cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h5>Brands</h5>
          <div className='my-5'>
            <ul className='flex flex-col gap-1 flex-wrap h-[210px] text-sm'>
              <li className='w-[165px] cursor-pointer'>Morning Brew</li>
              <li className='w-[165px] cursor-pointer'>Money with Katie</li>
              <li className='w-[165px] cursor-pointer'>Tech Brew</li>
              <li className='w-[165px] cursor-pointer'>Retail Brew</li>
              <li className='w-[165px] cursor-pointer'>Marketing Brew</li>
              <li className='w-[165px] cursor-pointer'>HR Brew</li>
              <li className='w-[165px] cursor-pointer'>IT Brew</li>
              <li className='w-[165px] cursor-pointer'>CFO Brew</li>
              <li className='w-[165px] cursor-pointer'>Healthcare Brew</li>
              <li className='w-[165px] cursor-pointer'>Bossy</li>
              <li className='w-[165px] cursor-pointer'>Morning Brew Daily</li>
              <li className='w-[165px] cursor-pointer'>The Money with Katie Show</li>
              <li className='w-[165px] cursor-pointer'>Founder's Journal</li>
            </ul>
          </div>
        </div>
        <div>
          <h5>Search</h5>
          <ul className='mt-4 text-sm'>
          <li className='w-[165px] cursor-pointer'>Stories</li>
          <li className='w-[165px] cursor-pointer'>Newsletter Issues</li>
          </ul>
        </div>
        <div>
          <h5>Brew</h5>
          <ul className='mt-4 text-sm'>
          <li className='w-[165px] cursor-pointer'>Shop</li>
          <li className='w-[165px] cursor-pointer'>About Us</li>
          <li className='w-[165px] cursor-pointer'>Careers</li>
          <li className='w-[165px] cursor-pointer'>Advertise with Us</li>
          <li className='w-[165px] cursor-pointer'>FAQ</li>
          <li className='w-[165px] cursor-pointer'>Privacy</li>
          <li className='w-[165px] cursor-pointer'>Terms of Service</li>
          <li className=' cursor-pointer'>Do Not Sell / Share My Personal Information</li>
          <li className='w-[165px] cursor-pointer'>Cookie Preferences</li>
         </ul>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mb-5 text-[10px]'>
        <p>© 2024 Hartej Singh</p>
        <p className='ml-1'>All Rights Reserved.</p></div>
    </div>
  )
}

export default Footer