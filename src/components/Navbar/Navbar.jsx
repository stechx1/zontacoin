import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../Button';

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  const router = useRouter();
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <nav class='border-gray-200 px-2 sm:px-4 py-2.5 shadow-sm'>
      <div class='container flex flex-wrap justify-between items-center mx-auto'>
        <Link href={'/'}>
          <p class='flex items-center text-xl font-bold'>
            <img
              src='/images/logo-inverted.png'
              class='mr-3 h-6 sm:h-9'
              alt='Zontacoin Logo'
            />
            ZontaCoin
          </p>
        </Link>
        <button
          onClick={() => setOpenMobileNav((prev) => !prev)}
          data-collapse-toggle='navbar-default'
          type='button'
          class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span class='sr-only'>Open main menu</span>
          <svg
            class='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>

        <div class='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul class='flex flex-col items-center md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 '>
            <li>
              <Link href='/'>
                <p aria-current='page'>Home</p>
              </Link>
            </li>
            <li>
              <Link href='#intro'>
                <p aria-current='page'>About</p>
              </Link>
            </li>
            <li>
              <Link href='#zonta-earn'>
                <p aria-current='page'>Zonta Earn</p>
              </Link>
            </li>
            <li>
              <Link href='#trading'>
                <p aria-current='page'>Trading Model</p>
              </Link>
            </li>
            <li>
              <Link href='#features'>
                <p aria-current='page'>Features</p>
              </Link>
            </li>
            <li>
              <Button
                type='primary'
                size='small'
                onClick={() => router.push('/ico')}
              >
                Buy Now
              </Button>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile */}
      <div
        className={`${
          openMobileNav ? 'block' : 'hidden'
        } md:hidden lg:hidden xl:hidden`}
      >
        <ul class='flex flex-col items-center text-left space-y-2'>
          <li>
            <Link href='/'>
              <p aria-current='page'>Home</p>
            </Link>
          </li>
          <li>
            <Link href='#intro'>
              <p aria-current='page'>About</p>
            </Link>
          </li>
          <li>
            <Link href='#zonta-earn'>
              <p aria-current='page'>Zonta Earn</p>
            </Link>
          </li>
          <li>
            <Link href='#trading'>
              <p aria-current='page'>Trading Model</p>
            </Link>
          </li>
          <li>
            <Link href='#features'>
              <p aria-current='page'>Features</p>
            </Link>
          </li>
          <li>
            <Button
              type='primary'
              size='small'
              onClick={() => router.push('/ico')}
            >
              Buy Now
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
