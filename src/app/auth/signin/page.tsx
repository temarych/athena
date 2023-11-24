import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

const SignIn = () => (
  <div className="flex flex-col px-4 py-8 gap-8">
    <h1 className="text-xl font-bold">Sign in</h1>
    
    <div className="flex flex-col gap-4">
      <Input placeholder="Email" />
      <Input placeholder="Password" />
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
