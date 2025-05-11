import {  motion , AnimatePresence } from 'framer-motion'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins} from 'next/font/google';



const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], 
    });



type ResponsiveMenuType = {
    open : boolean;
    setOpen: (val: boolean) => void;
}

const ResponsiveMenu = ({open , setOpen  } :ResponsiveMenuType ) => {
    const pathname = usePathname();

    const handleClick = () => {
        setOpen(false)
    }

    return(
        <AnimatePresence mode='wait'>
        {open && (
                <motion.div
                initial={{opacity:0 , y:-100}}
                animate={{opacity:1 , y:0}}
                exit={{opacity:0 , y:-100}}
                className='absolute  top-20 left-0 w-full h-full  z-10'
                >
                <div className=' text-2xl  hover:cursor-pointer  bg-[rgb(8,116,156)] text-white py-10  m-6  rounded-3xl ' >
                    <ul className=' flex flex-col text-sm sm:text-base md:text-lg justify-center  items-center gap-10' >
                       <Link href='/' onClick={handleClick} >
                        <li className={`${pathname === '/' ? 'underline ' : ""} ${poppins.className} `}>
                            Home
                        </li>
                       </Link>
                        <Link href='/about' onClick={handleClick} >
                            <li className={`${pathname === '/about' ? 'underline ' : ""} ${poppins.className}`} >
                                About Us
                            </li>
                        </Link>
                        <Link href='/service' onClick={handleClick} >
                            <li className={`${pathname === '/service' ? 'underline ' : ""} ${poppins.className}`}>
                                Service
                            </li>
                        </Link> 
                        <Link href='/contact' onClick={handleClick} >
                            <li className={`${pathname === '/contact' ? 'underline ' : ""} ${poppins.className}`}>
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