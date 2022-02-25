import { useState } from 'react';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Spinner from './Spinner';

const loginElement = (status) => {
  switch (status) {
    case 'loading':
      return <Spinner />;
    case 'authenticated':
      return (
        <div
          className="cursor-pointer"
          onClick={() => signOut({ callbackUrl: '/login' })}
        >
          Logout
        </div>
      );
    case 'unauthenticated':
      return <Link href="/login">Login</Link>;
    default:
      return <Spinner />;
  }
};

export default function Navbar({ session, status }) {
  return (
    <div className=" w-full border-b">
      <div className="mx-auto flex max-w-5xl items-center py-4 px-8">
        <div className="text-2xl font-black text-gray-900">
          <Link href="/">core</Link>
        </div>
        <div className="grow"></div>
        <ul className="hidden flex-col sm:flex sm:flex-row">
          <li className="mr-8 text-sm font-bold text-gray-700">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="mr-8 text-sm font-bold text-gray-700">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="text-sm font-bold text-gray-700">
            {loginElement(status)}
          </li>
        </ul>
        <Menu as="div" className="relative flex flex-col sm:hidden">
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </Menu.Button>

          <Menu.Items className="absolute right-0 top-8 mt-2 w-56 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`${
                    active ? 'bg-gray-400 text-white' : 'text-gray-700'
                  } group flex w-full items-center rounded-md px-4 py-4 text-lg font-bold `}
                  href="/blog"
                >
                  Blog
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`${
                    active ? 'bg-gray-400 text-white' : 'text-gray-700'
                  } group flex w-full items-center rounded-md px-4 py-4 text-lg font-bold`}
                  href="/about-us"
                >
                  About Us
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`${
                    active ? 'bg-gray-400 text-white' : 'text-gray-700'
                  } group flex w-full items-center rounded-md px-4 py-4 text-lg font-bold`}
                  href="/login"
                >
                  Login
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
