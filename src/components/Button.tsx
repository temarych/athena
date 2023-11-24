'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { fromSelectors, mergeStyles }       from '@/utils/style';

export interface ButtonVariance {
  color  : 'red' | 'blue' | 'gray';
  radius : 'sm' | 'md' | 'lg';
  size   : 'sm' | 'md' | 'lg';
  variant: 'contained' | 'outlined';
}

const getStyle = fromSelectors<ButtonVariance>([
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

  // Blue
  { color: 'blue', variant: 'contained', style: 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700' },
  { color: 'blue', variant: 'outlined', style: 'text-blue-500 border-blue-500 hover:bg-blue-50 active:bg-blue-100' },

  // Gray
  { color: 'gray', variant: 'outlined', style: 'text-gray-500 border-gray-500 hover:bg-gray-50 active:bg-gray-100' },
  { color: 'gray', variant: 'outlined', style: 'text-gray-500 border-gray-200 hover:bg-gray-50 active:bg-gray-100' },
]);

export type ButtonBaseProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
export type ButtonProps     = ButtonBaseProps & Partial<ButtonVariance>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children, 
  color   = 'blue',
  size    = 'md',
  radius  = 'md',
  variant = 'contained',
  ...props
}, ref) => {
  const variance = { color, size, radius, variant };

  return (
    <button {...props} ref={ref} className={mergeStyles(getStyle(variance), className)}>
      {children}
    </button>
  );
});
