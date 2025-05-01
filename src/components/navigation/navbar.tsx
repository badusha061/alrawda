'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { Button } from '../ui/button';
import Logo from './images/al_rawda.jpg'
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { AlignJustify } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';
import { Poppins  , Inter} from 'next/font/google';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    });

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });



function Navbar() {

    const pathname = usePathname();

    const [isopen , setIsopen ] = useState<boolean>(false)

  return (
    <> 
    <nav className='overflow-hidden' >
      <div className="container flex justify-between  items-center w-full h-20 bg-white sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href='/' >
                <Image src={Logo} alt="Logo" width={200} height={46} />
            </Link>
            <ul className="hidden md:flex gap-x-10 text-[#08749c] ">
              <li>
                <Link href="/">
                  <p className={`${pathname === '/' ? 'underline ' : ""} ${inter.className}`} >Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className={`${pathname === '/about' ? 'underline ' : ""} ${inter.className} `} >About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <p className={`${pathname === '/service' ? 'underline ' : ""} ${inter.className} `} >Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className={`${pathname === '/contact' ? 'underline ' : ""}${inter.className} `} >Contact</p>
                </Link>
              </li>
            </ul>
            <Button className={`${poppins.className} hidden md:block w-[150px] h-[50px] bg-[rgb(8,116,156)]   hover:cursor-pointer  hover:bg-[#08749c]`} >
                Reach Out
            </Button>
          </div>
        </div>

        <div className=' md:hidden' onClick={() => setIsopen(!isopen)} >
            <AlignJustify  className='text-4xl hover:cursor-pointer' />
        </div>
      </div>
    </nav>

        <ResponsiveMenu open={isopen} />

    </>
  )
}

export default Navbar