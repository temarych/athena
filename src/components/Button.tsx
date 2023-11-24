'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, tv }                 from 'tailwind-variants';

export const button = tv({
  variants: {
    color: {
      blue: '',
      gray: ''
    },
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    size: {
      sm: 'text-sm h-8 px-2',
      md: 'text-md h-10 px-3',
      lg: 'text-lg h-12 px-4',
    },
    variant: {
      contained: '',
      outlined : 'border'
    }
  },
  defaultVariants: {
    color  : 'blue',
    focus  : 'blue',
    radius : 'md',
    size   : 'md',
    variant: 'contained'
  },
  compoundVariants: [
    // Blue
    { color: 'blue', variant: 'contained', class: 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700' },
    { color: 'blue', variant: 'outlined', class: 'text-blue-500 border-blue-500 hover:bg-blue-50 active:bg-blue-100' },

    // Gray
    { color: 'gray', variant: 'outlined', class: 'text-gray-500 border-gray-500 hover:bg-gray-50 active:bg-gray-100' },
    { color: 'gray', variant: 'outlined', class: 'text-gray-500 border-gray-200 hover:bg-gray-50 active:bg-gray-100' },
  ]
});

export type ButtonBaseProps    = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
export type ButtonVariantProps = VariantProps<typeof button>;

export type ButtonProps = ButtonBaseProps & ButtonVariantProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children, 
  color,
  size,
  radius,
  variant,
  ...props
}, ref) => (
  <button
    {...props}
    ref       = {ref}
    className = {button({
      color,
      size,
      radius,
      variant,
      className
    })}
  >
    {children}
  </button>
));
