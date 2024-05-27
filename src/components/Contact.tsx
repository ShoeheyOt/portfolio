import { ContactForm } from "./ContactForm";
import { ContactLink } from "./ContactLink";

export const Contact = () => {
  return (
    <div
      id="contact"
      className=" 2xl:h-[calc(100vh-8rem)] 2xl:w-[calc(100vw-14rem)] flex flex-col items-center gap-12 mt-20"
    >
      <h2 className="text-3xl mt-16">Contact Form</h2>
      <p className="text-md text-center mb-12 px-4">
        Want to contact me? Send me message via below form :)
      </p>
      <div className="flex flex-col items-center gap-28 lg:gap-56 w-full mb-4">
        <ContactForm />
        <ContactLink />
      </div>
    </div>
  );
};
