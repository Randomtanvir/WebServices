import ContactForm from "@/components/contact/Contactform2";
import CommonNavBgClour from "@/components/navbar/CommonNavBgClour";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <CommonNavBgClour message="Get In Touch..." />
      <div className="grid mt-20 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-gray-600">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img src="/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
