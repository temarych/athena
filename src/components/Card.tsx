'use client';

import { ReactNode }                  from 'react';
import { fromSelectors, mergeStyles } from '@/utils/style';

export interface CardVariance {
  color  : 'gray';
  radius : 'sm' | 'md' | 'lg';
  variant: 'outlined';
}

export const getStyle = fromSelectors<CardVariance>([
  // Radius
  { radius: 'sm', style: 'rounded-sm' },
  { radius: 'md', style: 'rounded-md' },
  { radius: 'lg', style: 'rounded-lg' },

  // Outlined
  { variant: 'outlined', style: 'border' },
  { variant: 'outlined', color: 'gray', style: 'border-gray-200' }
]);

export interface CardProps extends Partial<CardVariance> {
  className?: string;
  children? : ReactNode;
}

export const Card = ({
  className,
  children,
  color   = 'gray',
  radius  = 'md',
  variant = 'outlined',
  ...props
}: CardProps) => {
  const variance = { color, radius, variant };

  return (
    <div className={mergeStyles(getStyle(variance), className)}>
      {children}
    </div>
  );
};
