import React from 'react'
import emailKey from "@/features/email/emailConfig";
import ContactUsClient from './clientSideComponents/ContactUsClient'
export default function ContactUsServer() {
  return <ContactUsClient emailKey={emailKey}/>
}
