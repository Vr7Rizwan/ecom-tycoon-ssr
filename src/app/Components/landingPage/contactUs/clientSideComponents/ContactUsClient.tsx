"use client";
import React, { useRef, useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setSectionRef } from "@/features/slice/slice";
import FramerWrapper from "../../../../../../lib/FramerWrapper";
import Image from "next/image";

export default function ContactUsClient({key}:any) {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(formRef.current){
      dispatch(setSectionRef({key: "contactSection",ref:formRef.current}));
    }
  },[]);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = formRef.current;

    if (!form) {
      console.error("Form ref is not available");
      setIsSending(false);
      return;
    }

    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    const fullName = `${firstName} ${lastName}`;

    const templateParams = {
      fullName,
      firstName,
      email,
      number: phone,
      message,
    };

    emailjs
      .send(key.service_ID, key.template_ID, templateParams, {
        publicKey: key.public_key,
      })
      .then((res) => {
        console.log(res);
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
        setPhone("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Please try again or contact us directly.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const eachLabelClass =
    "block text-sm md:text-3xl font-medium text-gray-700 mb-1 dark:text-white";
  const eachInputClass =
    "w-full text-3xl px-4 py-2 border border-gray-300 rounded-lg focus:ring-primaryColor focus:border-primaryColor focus:outline-none transition duration-300 hover:border-primaryColor/50";

  return (
    <FramerWrapper animation="fade-up"
    duration={0.8} // 800ms converted to seconds
    delay={0.1} // 100ms converted to seconds
    easing="ease-out"
    once={true} >
      <div className="flex w-9/10 mx-auto my-10 rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="hidden lg:flex h-auto w-1/2 bg-primaryColor aspect-video justify-end items-center overflow-hidden relative">
      <Image
            src="/assets/ContactForm/contact.webp"
            className="h-full w-1/2 object-contain relative z-20 drop-shadow-2xl"
            alt="Contact us illustration"
            width={710}
            height={1520}
            priority
          />
          </div>
           <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full lg:w-1/2 flex bg-white dark:bg-gray-800 flex-col justify-center items-center md:gap-7 mx-auto p-6 md:p-8 lg:p-12 space-y-5"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-md leading-tight">
          <em>
            Have Questions? Let's{" "}
            <span className="text-primaryColor">Talk.</span>
          </em>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      {/* First Name */}
      <div className="w-full">
        <label className={eachLabelClass}>
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          required
          placeholder="Enter your first name"
          className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400`}
        />
      </div>

      {/* Last Name */}
      <div className="w-full">
        <label className={eachLabelClass}>
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          required
          placeholder="Enter your last name"
          className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400`}
        />
      </div>

      {/* Email */}
      <div className="w-full">
        <label className={eachLabelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400`}
        />
      </div>

      {/* Phone Number */}
      <div className="w-full">
        <label className={`${eachLabelClass} text-gray-700 dark:text-gray-300`}>
          Phone Number <span className="text-red-500 dark:text-red-400">*</span>
        </label>
        <PhoneInput
          country={"pk"}
          value={phone}
          onChange={(value: string) => setPhone(value)}
          inputProps={{
            name: "number",
            required: true,
            placeholder: "Enter your phone number",
          }}
          containerClass="w-full"
          inputClass="!w-full !py-2 !pl-20 !pr-4 !border !border-gray-300 dark:!border-gray-600 !rounded-lg !text-3xl !bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white !placeholder-gray-500 dark:!placeholder-gray-400 !focus:ring-primaryColor !focus:border-primaryColor dark:!focus:border-primaryColor !transition !duration-300 hover:!border-primaryColor/50 dark:hover:!border-primaryColor/50"
          buttonClass="!border-r !border-gray-300 dark:!border-gray-600 !bg-gray-50 dark:!bg-gray-700 !hover:bg-gray-100 dark:!hover:bg-gray-600 !transition !duration-300"
          dropdownClass="!z-50 !shadow-lg !border !border-gray-300 dark:!border-gray-600 !bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white"
        />
      </div>

      {/* Message */}
      <div className="w-full">
        <label className={eachLabelClass}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or ask us anything..."
          className={`${eachInputClass} dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 resize-none min-h-[120px]`}
        />
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center pt-4">
        <button
          type="submit"
          disabled={isSending}
          className={`w-full md:w-auto text-lg md:text-2xl lg:text-3xl py-4 px-8 md:px-14 bg-primaryColor hover:bg-secondaryColor hover:text-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primaryColor/30 ${
            isSending
              ? "opacity-50 cursor-not-allowed scale-100"
              : "hover:cursor-pointer active:scale-[0.98]"
          }`}
        >
          <span className="flex items-center justify-center space-x-2">
            {isSending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message</span>
            )}
          </span>
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="!text-base !font-medium"
        bodyClassName="!text-gray-800"
      />
    </form>
      

    </div>
    </FramerWrapper>
  );
}
