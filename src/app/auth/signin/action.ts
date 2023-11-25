'use server';

import { SignInSchema } from './form';

export const signIn = async (data: SignInSchema) => {
  console.log(data);
};
