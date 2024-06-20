import { ContactForm } from "./ContactForm";
import { ContactLink } from "./ContactLink";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-12 mt-40 2xl:mt-48"
    >
      <h2 className="text-3xl text-themeWhite mt-16">Contact Form</h2>
      <p className="text-md text-themeWhite text-center mb-12 px-4">
        Thank you for visiting my website. If you have any question about my
        project or about me, please contact me via below form or link.
      </p>
      <div className="flex flex-col items-center gap-28 lg:gap-24 w-full mb-4 lg:mb-16 3xl:mb-44">
        <ContactForm />
        <ContactLink />
      </div>
    </div>
  );
};
