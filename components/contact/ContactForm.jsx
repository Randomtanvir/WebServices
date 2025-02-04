import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="mb-[22px]">
        <label
          htmlFor="fullName"
          className="mb-4 block text-sm text-body-color dark:text-dark-6"
        >
          Full Name*
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Adam Gelius"
          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
        />
      </div>
      <div className="mb-[22px]">
        <label
          htmlFor="email"
          className="mb-4 block text-sm text-body-color dark:text-dark-6"
        >
          Email*
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@yourmail.com"
          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
        />
      </div>
      <div className="mb-[22px]">
        <label
          htmlFor="phone"
          className="mb-4 block text-sm text-body-color dark:text-dark-6"
        >
          Phone*
        </label>
        <input
          type="text"
          name="phone"
          placeholder="+885 1254 5211 552"
          className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
        />
      </div>
      <div className="mb-[30px]">
        <label
          htmlFor="message"
          className="mb-4 block text-sm text-body-color dark:text-dark-6"
        >
          Message*
        </label>
        <textarea
          name="message"
          rows="1"
          placeholder="type your message here"
          className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
        ></textarea>
      </div>
      <div className="mb-0">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-purple-800 px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-purple-900 cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
