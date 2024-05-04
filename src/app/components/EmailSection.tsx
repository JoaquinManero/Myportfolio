"use client";
import React, { useState, useRef } from "react";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import { TypewriterEffectSmoothDemo } from "./acceternity/Typewritter";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        formRef.current ?? "",
        process.env.NEXT_PUBLIC_USER_ID ?? ""
      )
      .then(
        () => {
          setSuccess(true);
          setEmailSubmitted(true);
          setTimeout(() => {
            setSuccess(false);
            setEmailSubmitted(false);
          }, 5000);
        },
        () => {
          setError(true);
          setEmailSubmitted(true);
          setTimeout(() => {
            setError(false);
            setEmailSubmitted(false);
          }, 5000);
        }
      );

    if (formRef.current) {
      (formRef.current as HTMLFormElement).reset();
    }
  };

  return (
    <section
      id="contact"
      className="grid lg:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 flex flex-col justify-center items-center">
        <TypewriterEffectSmoothDemo />
        <Image
          src="/images/me2.png"
          height="1000"
          width="1000"
          className="lg:h-52 lg:w-52 max-sm:h-40 max-sm:w-40 sm:h-40 sm:w-40  object-cover   rounded-full group-hover/card:shadow-xl hover:scale-110 transition-transform duration-700"
          alt="thumbnail"
        />
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email_id"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="Message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
