import { z } from 'zod';

const passwordLength = 8;

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(passwordLength, { message: `Password must be at least ${passwordLength} characters long.` }),
});

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>;
