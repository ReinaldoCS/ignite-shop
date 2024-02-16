import { z } from 'zod'

const envSchema = z.object({
  NEXT_URL: z.string().url(),
  STRIPE_PUBLIC_KEY: z.string({
    invalid_type_error: 'Informa a chave publica do stripe',
  }),
  STRIPE_SECRET_KEY: z.string({
    invalid_type_error: 'Informa a chave secreta do stripe',
  }),
})

export const env = envSchema.parse(process.env)
