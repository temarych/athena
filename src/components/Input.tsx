'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { VariantProps, tv }                from 'tailwind-variants';

export const input = tv({
  variants: {
    color: {
      gray: 'border-gray-200 hover:border-gray-300'
    },
    focus: {
      blue: 'focus:outline-blue-500'
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
      outlined: 'border'
    }
  },
  defaultVariants: {
    color  : 'gray',
    focus  : 'blue',
    radius : 'md',
    size   : 'md',
    variant: 'outlined'
  }
});

export type InputBaseProps    = Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>;
export type InputVariantProps = VariantProps<typeof input>;

export type InputProps = InputBaseProps & InputVariantProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  children, 
  color,
  focus,
  size,
  radius,
  variant,
  ...props
}, ref) => (
  <input
    {...props}
    ref       = {ref}
    className = {input({
      color,
      focus,
      size,
      radius,
      variant,
      className
    })}
  />
));
