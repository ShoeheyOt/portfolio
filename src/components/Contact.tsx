import { ContactForm } from "./ContactForm";
import { ContactLink } from "./ContactLink";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-12 mt-40 2xl:mt-48 px-4 md:px-16 lg:px-40 3xl:px-64"
    >
      <h2 className="text-3xl mt-16 w-full px-4 text-center">Contact Form</h2>
      <p className="text-md lg:text-lg text-center mb-12">
        <span className="font-bold underline">Thank you</span> for visiting my
        website. If you have any question about my project or about me, please
        feel free to contact me via below form or LinkedIn.
      </p>
      <div className="flex flex-col items-center gap-28 lg:gap-24 w-full mb-4 lg:mb-16 3xl:mb-44">
        <ContactForm />
        <ContactLink />
      </div>
    </div>
  );
};
