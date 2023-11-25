'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { fromSelectors, mergeStyles }      from '@/utils/style';

export interface InputVariance {
  variant: 'outlined';
  color  : 'blue' | 'red' | 'green';
  radius : 'sm' | 'md' | 'lg';
  size   : 'sm' | 'md' | 'lg';
  error  : boolean;
}

const getStyle = fromSelectors<InputVariance>([
  // Radius
  { radius: 'sm', style: 'rounded-sm' },
  { radius: 'md', style: 'rounded-md' },
  { radius: 'lg', style: 'rounded-lg' },

  // Size
  { size: 'sm', style: 'text-sm h-8 px-2' },
  { size: 'md', style: 'text-md h-10 px-3' },
  { size: 'lg', style: 'text-lg h-12 px-4' },

  // Outlined
  { variant: 'outlined', style: 'border' },
  { error: false, variant: 'outlined', style: 'border-gray-200 hover:border-gray-300' },
  { error: false, variant: 'outlined', color: 'blue', style: 'focus:outline-blue-500' },
  { error: false, variant: 'outlined', color: 'red', style: 'focus:outline-red-500' },
  { error: false, variant: 'outlined', color: 'green', style: 'focus:outline-green-500' },
  { error: true, variant: 'outlined', style: 'border-red-500 focus:outline-red-500 placeholder:text-red-500' }
]);

export type InputBaseProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>;
export type InputProps     = InputBaseProps & Partial<InputVariance>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  children, 
  error   = false,
  color   = 'blue',
  size    = 'md',
  radius  = 'md',
  variant = 'outlined',
  ...props
}, ref) => {
  const variance = { color, size, radius, variant, error };

  return (
    <input {...props} ref={ref} className={mergeStyles(getStyle(variance), className)} />
  );
});
