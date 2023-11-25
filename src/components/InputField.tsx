import { forwardRef, useId } from 'react';
import { Field, FieldProps } from './Field';
import { Input, InputProps } from './Input';

export type InputFieldProps = Omit<FieldProps & InputProps, 'className' | 'children' | 'id'>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
  label,
  helperText,
  error,
  ...props
}, ref) => {
  const id = useId();

  return (
    <Field id={id} label={label} helperText={helperText} error={error}>
      <Input {...props} id={id} ref={ref} error={error} />
    </Field>
  );
});
