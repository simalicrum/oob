import Button from './Button';
import FormInput from './FormInput';
import FormLabel from './FormLabel';

export default function Login() {
  return (
    <div className="mx-auto max-w-md px-4 pt-32 sm:pt-48">
      <h1 className="pb-16 text-4xl font-black text-gray-900 sm:text-4xl">
        Login
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
          <FormLabel forVar="email">Email</FormLabel>
          <FormInput id="email" type="email" />
        </div>
        <div className="mb-4 flex flex-col">
          <FormLabel forVar="password">Password</FormLabel>
          <FormInput id="password" type="password" />
        </div>
        <Button>Login</Button>
      </form>
    </div>
  );
}
