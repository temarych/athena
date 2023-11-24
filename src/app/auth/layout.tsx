import { ReactNode } from 'react';
import { Card }      from '@/components/Card';

export interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className='flex flex-col h-screen'>
    <Card className='m-auto max-w-sm w-full'>
      {children}
    </Card>
  </div>
);

export default AuthLayout;
