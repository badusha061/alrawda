import React from 'react'
import { Metadata } from 'next'
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


export const metadata : Metadata = {
  title:"Al Rawda About"
}

function AboutPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className={`${poppins.className} mb-4 text-4xl tracking-tight  text-[rgb(8,116,156)] dark:text-white`}>AL RAWDA Technical Service</h2>
                  <p className={`${inter.className} mb-4`}>AL RAWDA Technical Servie is the leading company for supply and installation of lead sheet and lead engineered products with a wide product portfolio and a diver s  customer base. AL RAWDA is a global bussiness that leads sheet and lead engineered products.  We are one of the major leading radiation shielding installation Company in U.A.E also. Our company prides itself on meet our ability to meet or exceed all of our customer demands. </p>
                  <p className={`${inter.className} `}>AL RAWDA Company able to do this throgh commitment to install high quality products at a firprice</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                  <Image width={500} height={500}  className="w-full rounded-lg" src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1745513934/al%20rawda/awmcasztprfc0viqyrtm.jpg" alt="office content 1"/>
                  <Image width={500} height={500} className="mt-4 w-full lg:mt-10 rounded-lg" src="https://res.cloudinary.com/dzvxebtnl/image/upload/v1745513993/al%20rawda/acrkgbf8bk930eblultm.jpg" alt="office content 2"/>
              </div>
          </div>
        </section>
      
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
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className={`${poppins.className} mb-4 text-4xl tracking-tight  text-[rgb(8,116,156)] dark:text-white`}>We are providing supply and  <span className="font-extrabold"> installation of all types </span> radiation protection from X-ray device industrail guage or equipement</h2>
              <p className={`${inter.className} mb-4 `}> We are recognized as a highly effectv meterail in providing protection from various sours of radiation </p>
              <p className={`${inter.className} mb-4 `}>We can draw up your equipement room drawing, help to implement the lead lining requirements from your physicst report, and will be there with you throughout the installation process. We have expert team for lead lining and total support for installation X-Ray machine.</p>
              
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Lead Lining
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <br />
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Lead Glass
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <br />
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Radiation Warning Lamp
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <br />
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Lead Sheilded Door, Windows
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <br />
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Solid Surface Tops
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <br />
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Vinyl Flooring
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <br />
              <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                  Dental Cabinet
                  <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
          </div>
      </div>
</section>
    </>
  )
}

export default AboutPage