'use client';

import { ReactNode }   from 'react';
import NextLink        from 'next/link';
import { mergeStyles } from '@/utils/style';

export interface LinkProps {
  href      : string;
  className?: string;
  children? : ReactNode;
}

export const Link = ({
  href,
  className,
  children
}: LinkProps) => (
  <NextLink href={href} className={mergeStyles('text-blue-500 underline decoration-blue-300 hover:decoration-blue-500', className)}>
    {children}
  </NextLink>
);
