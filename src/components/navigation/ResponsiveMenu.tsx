import {  motion , AnimatePresence } from 'framer-motion'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";



type ResponsiveMenuType = {
    open : boolean
}

const ResponsiveMenu = ({open } :ResponsiveMenuType ) => {
    const pathname = usePathname();

    return(
        <AnimatePresence mode='wait'>
        {open && (
                <motion.div
                initial={{opacity:0 , y:-100}}
                animate={{opacity:1 , y:0}}
                exit={{opacity:0 , y:-100}}
                className='absolute  top-20 left-0 w-full h-full  z-10'
                >
                <div className=' text-2xl  uppercase bg-[rgb(8,116,156)] text-white py-10  m-6  rounded-3xl ' >
                    <ul className=' flex flex-col  justify-center  items-center gap-10' >
                       <Link href='/' >
                        <li className={`${pathname === '/' ? 'underline ' : ""}`}>
                            Home
                        </li>
                       </Link>
                        <Link href='/about'>
                            <li className={`${pathname === '/about' ? 'underline ' : ""}`} >
                                About
                            </li>
                        </Link>
                        <Link href='/service' >
                            <li className={`${pathname === '/service' ? 'underline ' : ""}`}>
                                Service
                            </li>
                        </Link> 
                        <Link href='/contact' >
                            <li className={`${pathname === '/contact' ? 'underline ' : ""}`}>
                                Contacts
                            </li>
                        </Link>
                    </ul>
                </div>
                </motion.div>
        )}
    </AnimatePresence>  
    )
}

export default ResponsiveMenu