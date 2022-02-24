import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Button from './Button';

export default function Secret() {
  return (
    <div className="justify-items mx-auto flex max-w-5xl flex-col px-4 pt-32 text-center sm:pt-48">
      <h1 className="text-4xl font-black text-gray-900 sm:text-6xl">
        Welcome. All the secrets are here!
      </h1>
      <div className="mt-8 w-auto">
        <Link href="#">
          <Button onClick={() => signOut()}>Log out</Button>
        </Link>
      </div>
    </div>
  );
}
