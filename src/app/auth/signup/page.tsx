import { Button } from '@/components/Button';
import { Input }  from '@/components/Input';

const SignUp = () => (
  <div className="flex flex-col px-4 py-8 gap-8">
    <h1 className="text-2xl font-bold">Sign up</h1>
    
    <div className="flex flex-col gap-4">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm password" />
    </div>

    <Button>
      Sign up
    </Button>

    <div className="flex flex-col gap-4">
      <Button variant="outlined" color="gray">
        Continue with Google
      </Button>
      <Button variant="outlined" color="gray">
        Continue with Facebook
      </Button>
    </div>
  </div>
);

export default SignUp;
