import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Schema, schema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  const onSubmit = (data: Schema) => {
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    const { sender, email, message } = data;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          sender,
          email,
          message,
        },
        { publicKey }
      )
      .then(
        () => {
          console.log("success");
        },
        (error) => {
          console.log("something wrong", error.message);
        }
      );
    reset();
  };

  return (
    <div className="w-2/4 h-2/5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("sender", { required: true })}
          type="text"
          placeholder="name"
          className="rounded-md pl-2 py-2 text-dark bg-themeWhite placeholder:text-tertiary"
        />
        {errors.sender && <p className="text-danger">name is required</p>}
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="email"
          className="rounded-md pl-2 py-2 text-dark bg-themeWhite placeholder:text-tertiary"
        />
        {errors.email && <p className="text-danger">email is required</p>}
        <textarea
          {...register("message", { required: true })}
          rows={7}
          className="rounded-md text-dark bg-themeWhite"
        />
        {errors.message && <p className="text-danger">Please input</p>}
        <button
          type="submit"
          className="cursor-pointer text-primary bg-secondary rounded-md py-2 hover:opacity-80 text-2xl"
        >
          Send
        </button>
      </form>
    </div>
  );
};
