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
          src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          className="mx-auto h-12"
          width={500}
          height={500}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p className={`${inter.className}`}>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto size-10 rounded-full" 
              width={500}
              height={500}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className={`${poppins.className}  text-gray-900`}>Judith Black</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className={`${inter.className} text-gray-600`}>CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
   </>
  )
}

export default CustomerSection