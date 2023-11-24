'use client';

import { ReactNode }        from 'react';
import { VariantProps, tv } from 'tailwind-variants';

export const card = tv({
  variants: {
    color: {
      gray: 'border-gray-200'
    },
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    variant: {
      outlined: 'border'
    }
  },
  defaultVariants: {
    color  : 'gray',
    radius : 'md',
    variant: 'outlined'
  }
});

export type CardVariantProps = VariantProps<typeof card>;

export interface CardProps extends CardVariantProps {
  className?: string;
  children? : ReactNode;
}

export const Card = ({
  className,
  children,
  ...props
}: CardProps) => (
  <div className={card({ ...props, className })}>
    {children}
  </div>
);
