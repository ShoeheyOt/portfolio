import { useForm } from "react-hook-form";

export const Contact = () => {
  interface UseFormInputs {
    name: string;
    email: string;
    content: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UseFormInputs>();

  const onSubmit = (data: UseFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <div
      id="contact"
      className="h-[calc(100vh-8rem)] w-[calc(100vw-14rem)] flex flex-col items-center"
    >
      <h2 className="text-3xl h-1/6">Contact Form</h2>
      <p className="text-xl mb-12">
        Want to contact me? Send me via below form :)
      </p>
      <div className="w-2/4 h-2/5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
            className="rounded-md pl-2 py-2 text-dark bg-themeWhite placeholder:text-tertiary"
          />
          {errors.name && <p className="text-danger">name is required</p>}
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="email"
            className="rounded-md pl-2 py-2 text-dark bg-themeWhite placeholder:text-tertiary"
          />
          {errors.email && <p className="text-danger">email is required</p>}
          <textarea
            {...register("content")}
            rows={7}
            className="rounded-md text-dark bg-themeWhite"
          />
          <button
            type="submit"
            className="cursor-pointer text-primary bg-secondary rounded-md py-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
