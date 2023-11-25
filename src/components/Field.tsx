'use client';

import { ReactNode }     from 'react';
import { fromSelectors } from '@/utils/style';

export interface FieldVariance {
  error: boolean;
}

export interface FieldProps extends Partial<FieldVariance> {
  id?        : string;
  label?     : string;
  helperText?: string;
  children?  : ReactNode;
}

const getHelperTextStyle = fromSelectors<FieldVariance>([
  { style: 'text-xs' },
  { error: false, style: 'text-gray-400' },
  { error: true, style: 'text-red-500' }
]);

export const Field = ({
  id,
  label,
  helperText,
  children,
  error = false
}: FieldProps) => {
  const variance: FieldVariance = { error };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-400">
          {label}
        </label>
      )}
      {children}
      {helperText && (
        <p className={getHelperTextStyle(variance)}>
          {helperText}
        </p>
      )}
    </div>
  );
};
