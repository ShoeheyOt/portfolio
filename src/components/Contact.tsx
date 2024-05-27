import { ContactForm } from "./ContactForm";
import { ContactLink } from "./ContactLink";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-12 mt-20 2xl:mt-32"
    >
      <h2 className="text-3xl text-themeWhite mt-16">Contact Form</h2>
      <p className="text-md text-themeWhite text-center mb-12 px-4">
        Want to contact me? Send me message via below form :)
      </p>
      <div className="flex flex-col items-center gap-28 lg:gap-24 w-full mb-4 lg:mb-16">
        <ContactForm />
        <ContactLink />
      </div>
    </div>
  );
};
