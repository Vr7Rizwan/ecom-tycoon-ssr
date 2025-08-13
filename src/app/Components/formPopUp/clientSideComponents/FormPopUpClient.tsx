"use client";
import React, { useRef, useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { RootState } from "@/features/store/store";

interface FormPopupProps {
  onClose: () => void;
  emailKey: any
}

const FormPopUpClient: React.FC<FormPopupProps> = ({ onClose,emailKey }) => {
  const key = emailKey;
  const isOpen = useSelector((state: RootState) => state.customSlice.isFormPopupOpen);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form ref is not available");
      return;
    }
    setIsSending(true);

    const form = formRef.current;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const templateParams = {
      fullName: `${firstName} ${lastName}`,
      firstName,
      email,
      number: phone,
      message,
    };

    emailjs
      .send(key.service_ID, key.template_ID, templateParams, {
        publicKey: key.public_key,
      })
      .then(() => {
        toast.success("Message sent successfully! We'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000,
        });
        form.reset();
        setPhone("");
        setTimeout(() => onClose(), 2000);
      })
      .catch((err) => {
        console.error("FAILED...", err.text);
        toast.error("Failed to send message. Please try again or contact us directly.", {
          position: "top-right",
          autoClose: 5000,
        });
      })
      .finally(() => setIsSending(false));
  };

  if (!isOpen) return null;

  const eachLabelClass = "block text-sm md:text-3xl font-medium text-gray-700 mb-1 dark:text-white";
  const eachInputClass = "w-full text-3xl px-4 py-2 border border-gray-300 rounded-lg focus:ring-primaryColor focus:border-primaryColor transition duration-300 hover:border-primaryColor/50";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-[10px] bg-black/30" onClick={handleBackdropClick}>
      <div className="relative w-[90%] lg:w-[70%] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200" aria-label="Close">
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-full overflow-y-auto p-6">
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col items-center gap-4">
            <div className="text-center mb-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md leading-tight">
                <em className="text-black dark:text-white" >Have Questions? Let's <span className="text-primaryColor">Talk.</span></em>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4">
                We'd love to hear from you...
              </p>
            </div>

            <div className="w-full">
              <label className={eachLabelClass}>First Name <span className="text-red-500">*</span></label>
              <input type="text" name="firstName" required placeholder="Enter your first name" className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600`} />
            </div>

            <div className="w-full">
              <label className={eachLabelClass}>Last Name <span className="text-red-500">*</span></label>
              <input type="text" name="lastName" required placeholder="Enter your last name" className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600`} />
            </div>

            <div className="w-full">
              <label className={eachLabelClass}>Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="email" required placeholder="your.email@example.com" className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600`} />
            </div>

            <div className="w-full">
              <label className={`${eachLabelClass} text-gray-700 dark:text-gray-300`}>Phone Number <span className="text-red-500">*</span></label>
              <PhoneInput
                country="pk"
                value={phone}
                onChange={setPhone}
                inputProps={{ name: "number", required: true, placeholder: "Enter your phone number" }}
                containerClass="w-full"
                inputClass="!w-full !rounded-lg !bg-white dark:!bg-gray-700 !text-gray-900 dark:!text-white"
                buttonClass="!border-r !border-gray-300 dark:!border-gray-600"
                dropdownClass="!z-50 !bg-white dark:!bg-gray-800"
              />
            </div>

            <div className="w-full">
              <label className={eachLabelClass}>Message <span className="text-red-500">*</span></label>
              <textarea name="message" required rows={4} placeholder="Your message..." className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600 resize-none min-h-[100px]`} />
            </div>

            <div className="w-full flex justify-center pt-2">
              <button type="submit" disabled={isSending} className={`w-full lg:w-1/4 text-lg md:text-2xl lg:text-3xl py-4 px-8 bg-primaryColor hover:bg-secondaryColor text-white font-semibold rounded-lg transition duration-300 transform ${isSending ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] hover:shadow-xl"}`}>
                {isSending ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default FormPopUpClient;
