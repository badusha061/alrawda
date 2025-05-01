
import { Metadata } from 'next'
import ContactHome from '@/components/sections/ContactHome'
import React from 'react' 



export const metadata : Metadata = {
  title:"Al Rawda Contact"
}

function ContactPage() {
  return (
    <>
      <ContactHome />
    </>
  )
}

export default ContactPage