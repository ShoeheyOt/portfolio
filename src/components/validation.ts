import * as z from "zod";

export const schema = z.object({
  sender: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export type Schema = z.infer<typeof schema>;
