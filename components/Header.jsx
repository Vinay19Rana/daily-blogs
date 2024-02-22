'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import { menuItems } from '../utils/Constants'
import Link from 'next/link'

const Header = () => {
  const [searchShow,setSearchShow] = useState(false)
  const [searchValue,setSearchValue] = useState('')
  const addActive = (e,type="show") =>{
    const { currentTarget } = e;
    const { lastElementChild } = currentTarget;

    if (type === "hide") {
        lastElementChild.classList.remove("activeMenu");
    } else {
        lastElementChild.classList.toggle("activeMenu");
    }
  }

  const searchInputHandler = (e) =>{
    if(e.currentTarget.value.length < 17){
      setSearchValue(e.currentTarget.value)
    }
  }

  const searchHandler = (e) =>{
    e.preventDefault()
    console.log(searchValue)
  }

  return (
    <div className='flex items-center justify-between gap-5 p-3 md:px-[4vw] lg:px-[10vw] xl:px-[14vw]  relative bg-white'>
         <Logo/>
         <div className='flex justify-between items-center w-[100%]'>
         <nav className='flex items-center gap-7  center-menu'>
          {menuItems.map((item)=>(
            <div key={item.slug} className='relative h-[30px]' onMouseEnter={(e)=>{item.sub.length > 0 && addActive(e)}} 
            onMouseLeave={(e)=>{item.sub.length > 0 && addActive(e,'hide')}}>
            <Link href={item.slug} className='list-none font-semibold text-md cursor-pointer'
             >
              {item.title}
              </Link>
              {item.sub.length > 0 && 
              (<ul className='hidden absolute bg-white py-5 px-4 top-7 left-[-70%] min-w-[170px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded'>
              {item.sub.map((subItems)=>(
                <li className='text-md cursor-pointer mb-4 font-semibold hover:text-blue-400 last:mb-0'>{subItems.title}</li>
              ))}
              </ul>
              )}
              </div>
          ))}
         </nav>
         <div className='flex justify-between items-center gap-8'>
          <div className='relative'>
            <i class="ri-search-line text-2xl cursor-pointer" onClick={()=>{setSearchShow(prev=>!prev)}}></i>
            {searchShow && <div className='absolute top-[100%] right-[50%] translate-x-[50%] translate-y-[50%] '>
              <form className='flex relative' onSubmit={searchHandler}>
                  <input type='text' value={searchValue} onChange={searchInputHandler} placeholder='Search Stories' className='h-10 p-3 pr-10 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded outline-none'/>
                  <button type='submit'><i class="ri-arrow-right-line absolute left-[88%] top-[10%] text-2xl cursor-pointer"></i></button>
              </form>
            </div>
              }
          </div>
          <button className='text-md lg:text-xl xl:text-2xl  text-blue-500 hover:bg-blue-500 hover:text-white p-2 rounded'><i class="ri-send-plane-fill mr-3"></i>Subscribe</button>
         </div>
         </div>
    </div>
  )
}

export default Header