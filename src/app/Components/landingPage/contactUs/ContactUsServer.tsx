import React from 'react'
import key from "@/features/email/emailConfig";
import ContactUsClient from './clientSideComponents/ContactUsClient'
export default function ContactUsServer() {
  return <ContactUsClient key={key}/>
}
