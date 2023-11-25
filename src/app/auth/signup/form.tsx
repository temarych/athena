'use client';

import { z }           from 'zod';
import { useForm }     from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button }      from '@/components/Button';
import { InputField }  from '@/components/InputField';
import { Link }        from '@/components/Link';
import { signUp }      from '@/actions/auth';

export const SignUpSchema = z.object({
  firstName      : z.string().min(1),
  lastName       : z.string().min(1),
  email          : z.string().email().min(1),
  password       : z.string().min(1),
  confirmPassword: z.string().min(1),
});

export type SignUpSchema = z.infer<typeof SignUpSchema>;

export const SignUpForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema)
  });

  return (
    <form className="flex flex-col px-4 py-8 gap-8" onSubmit={handleSubmit((data) => signUp(data))}>
      <h1 className="text-2xl font-bold">Sign in</h1>
  
      <div className="flex flex-col gap-4">
        <InputField
          placeholder = "First name"
          helperText  = {errors.firstName?.message}
          error       = {!!errors.firstName}
          {...register('firstName')}
        />
        <InputField
          placeholder = "Last name"
          helperText  = {errors.lastName?.message}
          error       = {!!errors.lastName}
          {...register('lastName')}
        />
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
        <InputField
          placeholder = "Confirm password"
          type        = 'password'
          helperText  = {errors.confirmPassword?.message}
          error       = {!!errors.confirmPassword}
          {...register('confirmPassword')}
        />
      </div>
  
      <Button type="submit">
        Sign in
      </Button>

      <p className="text-sm text-gray-400 text-center">
        {'Already have an account? '}
        <Link href="/auth/signin">Sign in</Link>
      </p>
  
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
