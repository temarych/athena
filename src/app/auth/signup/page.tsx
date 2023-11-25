import { Button }     from '@/components/Button';
import { InputField } from '@/components/InputField';

const SignUp = () => (
  <div className="flex flex-col px-4 py-8 gap-8">
    <h1 className="text-2xl font-bold">Sign up</h1>
    
    <div className="flex flex-col gap-4">
      <InputField placeholder="First name" />
      <InputField placeholder="Last name" />
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <InputField placeholder="Confirm password" />
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
