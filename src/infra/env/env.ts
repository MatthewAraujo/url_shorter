import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3333),
  REVERSE_PROXY_PORT: z.coerce.number().optional().default(9000)
})

export type Env = z.infer<typeof envSchema>


