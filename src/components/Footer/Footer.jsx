import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <div className='container mx-auto'>
      <footer class='p-4 rounded-lg shadow md:px-6 md:py-8'>
        <div class='sm:flex sm:items-center sm:justify-between'>
          <Link
            href='/'
            class='flex items-center mb-4 sm:mb-0'
          >
            <img
              src='/images/logo-inverted.png'
              class='h-8 mr-3'
              alt='Zontacoin Logo'
            />
            <span class='self-center text-2xl font-semibold whitespace-nowrap'>
              ZontaCoin
            </span>
          </Link>
          {/* <ul class='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' class='mr-4 hover:underline md:mr-6 '>
                About
              </a>
            </li>
            <li>
              <a href='#' class='mr-4 hover:underline md:mr-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' class='mr-4 hover:underline md:mr-6 '>
                Licensing
              </a>
            </li>
            <li>
              <a href='#' class='hover:underline'>
                Contact
              </a>
            </li>
          </ul> */}
        </div>
        <hr class='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <span class='block text-sm text-gray-500 sm:text-center '>
          ©
          <a href='https://flowbite.com/' class='hover:underline'>
            ZontaCoin
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};
