import { Button }     from '@/components/Button';
import { InputField } from '@/components/InputField';

const SignIn = () => (
  <div className="flex flex-col px-4 py-8 gap-8">
    <h1 className="text-2xl font-bold">Sign in</h1>
    
    <div className="flex flex-col gap-4">
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
    </div>

    <Button>
      Sign in
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

export default SignIn;
