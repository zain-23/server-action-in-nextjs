import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
    })
    .min(5)
    .max(50),
  body: z
    .string({
      required_error: "body is required",
    })
    .min(5)
    .max(50),
});
