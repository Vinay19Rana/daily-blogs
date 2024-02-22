import Image from 'next/image'
import React from 'react'
import LogoImg from '../public/fullname.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={LogoImg} unoptimized className='w-[100px] h-auto md:w-[150px] lg:w-[180px] xl:w-[200px]'/>
    </Link>
  )
}

export default Logo