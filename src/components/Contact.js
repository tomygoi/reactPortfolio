import React from "react";
import { useForm } from "@formspree/react";
function Contact() {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
    return <p>Submission Successful</p>;
  }
  return (
      <div id="contact" className="flex items-center min-h-screen bg-[#B9BAA3] ">
        <div className="container mx-auto ">
          <div className="max-w-md mx-auto my-10 bg-[#D6D5C9] p-5 rounded-md shadow-sm">
            <div className="text-center bg-[#D6D5C9]">
              <h1 className="my-3 text-3xl font-semibold">Contact</h1>
              <p className="text-gray-600">
                Fill up the form below to send a message.
              </p>
            </div>
            <div className="m-7">
              <form
                onSubmit={handleSubmit}
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-[#330E0C] rounded-md focus:outline-none focus:ring focus:ring-[#694B4A] focus:border-[#694B4A] bg-[#694B4A] dark:text-white dark:placeholder-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-[#330E0C] rounded-md focus:outline-none focus:ring focus:ring-[#694B4A] focus:border-[#694B4A] bg-[#694B4A] dark:text-white dark:placeholder-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Your Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-[#330E0C] rounded-md focus:outline-none focus:ring focus:ring-[#694B4A] focus:border-[#694B4A] bg-[#694B4A] dark:text-white dark:placeholder-gray-500"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-3 py-4 text-white bg-[#330E0C] rounded-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
