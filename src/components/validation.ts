import * as z from "zod";

export const schema = z.object({
  sender: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export type Schema = z.infer<typeof schema>;
