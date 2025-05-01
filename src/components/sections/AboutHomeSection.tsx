import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

import { Poppins  , Inter} from 'next/font/google';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    });

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });


function AboutHomeSection() {
  return (
    <section className="py-24 relative">

    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div
                className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <Image className=" rounded-xl object-cover" width={500} height={600} src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1745060136/al%20rawda/quoeqs07bugfciuwqhti.jpg" alt="about Us image" />
                </div>
                <Image className="sm:ml-0 ml-auto rounded-xl object-cover"   width={500} height={600} src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1745060232/al%20rawda/fqhuaavuwhibiwbwjppw.jpg"
                    alt="about Us image" />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h2
                            className={`${poppins.className} text-[rgb(8,116,156)] text-4xl leading-normal lg:text-start text-center`}>
                            AL RAWDA is a global bussines</h2>
                        <p className={`${inter.className} text-gray-500 text-base  leading-relaxed lg:text-start text-center`}>
                            We are one of the major leading radiation shielding installation Company in U.A.E also. Our Company prides  itself on meet our ability to meet or exceed all of our customer demands.</p>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                        <div className="flex-col justify-start items-start inline-flex">
                            <h3 className="text-[rgb(8,116,156)] text-4xl font-bold font-manrope leading-normal">33+</h3>
                            <h6 className={`${inter.className} text-gray-500 text-base  **:leading-relaxed`}>Years of Experience</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <h4 className="text-[rgb(8,116,156)] text-4xl font-bold font-manrope leading-normal">125+</h4>
                            <h6 className={`${inter.className} text-gray-500 text-base  **:leading-relaxed`}>Successful Projects</h6>
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                            <h4 className="text-[rgb(8,116,156)] text-4xl font-bold font-manrope leading-normal">52+</h4>
                            <h6 className={`${inter.className} text-gray-500 text-base  **:leading-relaxed`}>Happy Clients</h6>
                        </div>
                    </div>
                </div>

                <Button className="sm:w-fit w-full hover:cursor-pointer  hover:shadow-2xl  px-3.5 py-2 bg-[rgb(8,116,156)] hover:bg-[#08749c] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <Link href='/about'>
                        <span className={`${poppins.className} px-1.5 text-white text-sm font-medium leading-6`}>Read More</span>
                    </Link>
                </Button>
            </div>
        </div>
    </div>
</section>
                                        
  )
}

export default AboutHomeSection