import React from 'react'
import FormPopUpClient from './clientSideComponents/FormPopUpClient'
interface FormPopupProps {
    onClose: () => void;
    emailKey: any
  }

export default function FormPopUpServer({ onClose,emailKey }:FormPopupProps) {
  return <FormPopUpClient onClose={onClose} emailKey={emailKey} />
}
