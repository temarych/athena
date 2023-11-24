import { ReactNode } from 'react';
import { Card }      from '@/components/Card';

export interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className='flex flex-col sm:h-screen'>
    <Card variant={{ initial: 'dense', sm: 'outlined' }} className='m-auto sm:max-w-sm w-full'>
      {children}
    </Card>
  </div>
);

export default AuthLayout;
