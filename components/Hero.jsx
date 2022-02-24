import Link from 'next/link';
import Button from './Button';
import PageSpinner from './PageSpinner';

export default function Hero() {
  return (
    <div className="justify-items mx-auto flex max-w-5xl flex-col px-4 pt-32 text-center sm:pt-48">
      <h1 className="text-4xl font-black text-gray-900 sm:text-6xl">
        Want help getting your business off the ground?
      </h1>

      <p className=" mt-6 text-xl text-gray-400">
        Starting your own business is a pain in the ass. We're here to help and
        it's easy. Let's get going!
      </p>
      <div className="mt-8 w-auto">
        <Link href="#">
          <Button> Get started</Button>
        </Link>
      </div>
    </div>
  );
}
