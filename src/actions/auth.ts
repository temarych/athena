'use server';

export interface SignInData {
  email   : string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  console.log(data);
};

export interface SignUpData {
  firstName: string;
  lastName : string;
  email    : string;
  password : string;
}

export const signUp = async (data: SignUpData) => {
  console.log(data);
};
