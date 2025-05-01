'use client'

import { motion  } from 'framer-motion'; 
import React from 'react'
import Services from '@/data/service'
import Image from 'next/image'
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


function ServicePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className={`${poppins.className} text-2xl  tracking-tight text-[#08749c]`}>Explore Our Services</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Services.map((service) => (
            <div key={service.id} className="group relative">

            <motion.div variants={variants} initial="hidden" animate="show">
              <motion.div variants={image}>
              <Image
                alt='service Image'
                src={service.image}
                width={500}
                height={500}
                className="aspect-square w-full  hover:cursor-pointer  transition-all duration-300 group-hover:scale-110 cursor-pointer rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                </motion.div>
                </motion.div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className={`${inter.className}  text-[rgb(8,116,156)]`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {service.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicePage