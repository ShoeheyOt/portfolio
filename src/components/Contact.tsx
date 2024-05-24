import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[calc(100vh-8rem)] w-[calc(100vw-14rem)] flex flex-col items-center"
    >
      <h2 className="text-3xl h-1/6">Contact Form</h2>
      <p className="text-xl mb-12">
        Want to contact me? Send me via below form :)
      </p>
      <ContactForm />
    </div>
  );
};
