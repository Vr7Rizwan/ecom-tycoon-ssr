import React from "react";
import FormPopUpClient from "./clientSideComponents/FormPopUpClient";
interface FormPopupProps {
  onClose: () => void;
  emailKey: {
    service_ID: string;
    template_ID: string;
    public_key: string;
  };
}

export default function FormPopUpServer({ onClose, emailKey }: FormPopupProps) {
  return <FormPopUpClient onClose={onClose} emailKey={emailKey} />;
}
