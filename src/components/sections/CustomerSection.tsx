import Image from 'next/image'
import React from 'react'
import { Poppins  , Inter} from 'next/font/google';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    });

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500'], 
    });




function CustomerSection() {
  return (
   <>
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          alt=""
          src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1745081051/al%20rawda/brmdxmdyusrhc2aq12oy.jpg"
          className="mx-auto"
          width={100}
          height={100}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p className={`${inter.className}`}>
               AL RAWDA Technical Service, our mission is to deliver the highest quality lead shielding solutions with precision and care. We take pride in our expertise, reliability, and commitment to safety. Every project we handle reflects our dedication to excellence and customer satisfaction.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt="photo"
              src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1747322731/al%20rawda/ce0_mnsnum.jpg"
              className="mx-auto size-10 rounded-full" 
              width={500}
              height={500}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className={`${poppins.className}  text-gray-900`}>Muhammed Riyas</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className={`${inter.className} text-gray-600`}>CEO of AL RAWDA Tehincal</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
   </>
  )
}

export default CustomerSection