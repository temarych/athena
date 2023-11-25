'use client';

import { z }           from 'zod';
import { useForm }     from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button }      from '@/components/Button';
import { InputField }  from '@/components/InputField';
import { signIn }      from './action';

export const signInSchema = z.object({
  email   : z.string().email().min(1),
  password: z.string().min(1),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export const SignInForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema)
  });

  return (
    <form className="flex flex-col px-4 py-8 gap-8" onSubmit={handleSubmit((data) => signIn(data))}>
      <h1 className="text-2xl font-bold">Sign in</h1>
  
      <div className="flex flex-col gap-4">
        <InputField
          placeholder = "Email"
          helperText  = {errors.email?.message}
          error       = {!!errors.email}
          {...register('email')}
        />
        <InputField
          placeholder = "Password"
          type        = 'password'
          helperText  = {errors.password?.message}
          error       = {!!errors.password}
          {...register('password')}
        />
      </div>
  
      <Button type="submit">
        Sign in
      </Button>
  
      <div className="flex flex-col gap-4">
        <Button variant="outlined" color="gray">
          Continue with Google
        </Button>
        <Button variant="outlined" color="gray">
          Continue with Facebook
        </Button>
      </div>
    </form>
  );
};
