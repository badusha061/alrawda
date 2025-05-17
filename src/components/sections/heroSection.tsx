'use client'

import { motion  } from 'framer-motion'; 
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { HandPlatter , Contact } from 'lucide-react';
import Link from 'next/link';
import { Poppins  , Inter} from 'next/font/google';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    });

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });


const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.3,
        },
    },
    };
    
    const image = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
        duration: 1
        },
    },
    };
    

function HeroSection() {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className={`${poppins.className} max-w-2xl mb-4 text-4xl  leading-none tracking-tight md:text-5xl xl:text-6xl text-[rgb(8,116,156)] dark:text-[rgb(8,116,156)]`}>
            Al Rawda <br />Technical Services 
          </h1>

          <p className={`${inter.className} max-w-2xl mb-6  text-[#08749c] lg:mb-8 md:text-lg lg:text-xl dark:text-[#08749c]`}>
            AL RAWDA Technical Service is the leading company. 
            <a href="#" target="_blank" className="hover:underline">  AL RAWDA supply and installation </a> of lead sheet ad lead engineered products <a href="#/" className="hover:underline" target="_blank"> with a wide, product </a> portfolio and a divers&apos;s 
             <a href="https://flowbite.com/blocks/" target="_blank" className="hover:underline"> customer base</a>.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link  href='/service'>
                <Button className={`${poppins.className} inline-flex items-center justify-center w-full px-5 py-3 bg-[rgb(8,116,156)] text-sm font-medium text-center text-white border border-gray-200 rounded-lg hover:cursor-pointer hover:shadow-2xl sm:w-auto focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[rgb(8,116,156)] dark:hover:bg-[rgb(8,116,156)] dark:focus:ring-gray-800`}>
                    <HandPlatter />
                    Show Services
                </Button> 
            </Link>

            <Link href='/contact' >
                <Button className={`${poppins.className} inline-flex items-center justify-center w-full px-5 py-3 bg-[rgb(8,116,156)] text-sm font-medium text-center text-white border border-gray-200 rounded-lg hover:cursor-pointer hover:shadow-2xl  sm:w-auto focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[rgb(8,116,156)] dark:hover:bg-[rgb(8,116,156)] dark:focus:ring-gray-800`}>
                    <Contact />
                    Reach Out
                </Button>
            </Link>
         
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"> 
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="show"
         >

        <motion.div variants={image}>
            <Image src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1745034874/al%20rawda/iwiumgwqyoueibumg4ja.jpg" alt="hero image" className=' rounded-3xl object-cover shadow-2xl' width={600} height={600} />
        </motion.div>
        
        </motion.div>
        </div>
      </div>
    </section>

  );
}

export default HeroSection;
