import { ContactForm } from "./ContactForm";
import { ContactLink } from "./ContactLink";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[calc(100vh-8rem)] w-[calc(100vw-14rem)] flex flex-col items-center gap-12"
    >
      <h2 className="text-3xl">Contact Form</h2>
      <p className="text-xl mb-12">
        Want to contact me? Send me via below form :)
      </p>
      <div className="flex flex-col items-center  gap-56 w-full">
        <ContactForm />
        <ContactLink />
      </div>
    </div>
  );
};
