import React from 'react';
// types
import { MainLayoutProps } from './mode';

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <header className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-center lg:w-0 lg:flex-1'>
              <a href='#'>
                <svg
                  viewBox='0 0 423.5 134.29'
                  className='w-20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {' '}
                  <g>
                    {' '}
                    <path d='M68.37,16.5c1-2.43,3.1-8.6-3.6-16.4-5.9,8.35-14.48,8.22-23.15,8.09l-21.9,0C11.39,8.18,4.57,11.11,1,19.31c-3.65,8.43,3.59,16.39,3.59,16.39,5.9-8.35,14.49-8.22,23.15-8.08.64,0,5.07,0,14.33,0,0,0-4,0,7.58-.07C58,27.56,65,24.78,68.37,16.5Z'></path>{' '}
                    <path d='M77.43,118.66c2.16-2.23,4.91-19.57-.42-20.09-2.18,13.23-15.46,16.28-18.21,16.34-3.11.07-15.47.05-17.18,0-9-.14-10.13-.26-21.9-.23-8.33,0-15.14,2.88-18.69,11.08a12.91,12.91,0,0,0-.6,8.32l41.67,0S61.31,135.31,77.43,118.66Z'></path>{' '}
                    <path d='M93.32,45.28c-10.11-1.89-17.18,3.29-24,10.21C75.69,60.18,77,66.41,77,73.3c0,1.1,0,31.16,0,32.21,0,3.08-.51,13.55-.51,13.55,7.41,18.27,22.8,19.68,34.29,6a24.56,24.56,0,0,1-6.22-14.94c-.13-2.67-.15-4.81-.15-5.06,0-3.95,0-26.52,0-26.78a8.7,8.7,0,0,1,.51-2.56c2.32-4.78,11-9,11-9a13.92,13.92,0,0,1,8.63-1.86c4.49.62,6.11,3.31,6.16,7.39h0c0,13,0,21,0,34,0,1.82,0,3.64,0,5.46.22,18.16,9.58,26,26.9,21.18,7.94-2.19,15.13-6.74,22.82-10.19,8.16,15,24.15,15.64,34.11.52-7.95-7.45-7.62-12-7.85-30.55,5.84-.79,12,1.09,15,6a60.46,60.46,0,0,1,6.84,16.11c4.28,16.44,14.45,22.86,30.09,17.87,7.2-2.29,20.9-9.37,21.07-9.46,2.91,9,10.32,11.61,19.37,11,10.68-.71,28.81-12.82,32.44-15.87l0-25c0,10.67-5.58,18-16,20.87-5.72,1.57-9.23-.83-9.87-6.85-.17-1.57,0-48.32,0-50.64,0-12.79-9.45-18.23-20.3-15.63-6.25,1.5-11.62,4.65-15.18,10.65,6.53,2.7,8.1,9.1,8.1,15.16,0,12.29,0,22.12,0,34.41a13.54,13.54,0,0,1-14.59,13.63c-5-.5-5.4-4.51-5.59-7-1.51-18.83-8.85-23.27-22.76-24.22-.32,0,8.54-6.13,13.91-15.54,5-8.8,3.13-21.57-3.26-27.17-5.45-4.78-15.17-4.3-24.15,1.67-4.82,3.21-9.21,7.07-14.9,11.48,0,0,.11-16.14,0-25.11-.14-8.67-.26-17.25,8.08-23.15-7.8-6.69-15.65-7.24-24.09-3.6-8.2,3.55-11.14,10.36-11.16,18.69-.07,27.77.05,52.66,0,80.43,0,6.43-7.41,13.11-14.46,13.19-5.51.07-7.23-2.74-7.25-12,0-15.25.25-25-.13-40.23h-.06c0-6.26-2.2-12.39-6.13-15.83-5.45-4.78-15.17-4.3-24.14,1.68-4.82,3.21-9.21,7.07-14.9,11.48l-8.25,6.46C104.59,50.83,100,46.53,93.32,45.28ZM206.93,61.89c.09-3.6,6.57-6.85,11.86-6.12,4.83.66,6.28,3.86,5.89,8.31-.66,7.65-7.75,17-17.81,22.4C206.87,77.68,206.74,69.79,206.93,61.89Z'></path>{' '}
                    <circle
                      cx='292.47'
                      cy='14.42'
                      r='14.42'
                    ></circle>{' '}
                    <path d='M346.27,2.38C337.84-1.27,330-.72,322.19,6c8.35,5.9,8.22,14.49,8.08,23.15-.07,4.38-.14,85.05-.14,87.58a27.79,27.79,0,0,0,1.45,6.82c2.92,9,10.32,11.19,19.38,10.58,10.67-.71,19.53-5.54,27.73-12,1.47-1.15,3-2.23,4.71-3.49l0-25c0,10.67-5.58,18-16,20.87-5.72,1.57-9.23-.82-9.87-6.85-.17-1.57-.12-86.61-.12-86.61C357.33,12.74,354.48,5.93,346.27,2.38Z'></path>{' '}
                    <path d='M405.85,21.07c0-8.33-2.88-15.14-11.08-18.69C386.33-1.27,378.47-.72,370.68,6c8.35,5.9,8.22,14.49,8.09,23.15-.07,4.38-.14,85.05-.14,87.58a27.79,27.79,0,0,0,1.45,6.82c2.91,9,10.32,11.19,19.38,10.58A42.81,42.81,0,0,0,416.8,129c6.62-3.53,7.71-12.59,5.94-17.45a25.38,25.38,0,0,1-6.91,3c-5.72,1.57-9.36-.82-10-6.85C405.66,106.11,405.88,34.09,405.85,21.07Z'></path>{' '}
                    <path d='M51.38,18c0-8.33-26.95-.61-27.08,8.06-.07,4.37-.14,88.09-.14,90.62a27.74,27.74,0,0,0,1.46,6.82c2.91,9,10.32,11.19,19.37,10.58,10.67-.71,19.53-5.54,27.73-12,1.47-1.15,3-2.23,4.71-3.49l0-25c0,10.67-5.58,18-16,20.87-5.72,1.57-9.22-.82-9.87-6.85C51.33,106.11,51.42,31.06,51.38,18Z'></path>{' '}
                    <path d='M422.35,48.67c1-2.43,3.1-8.6-3.59-16.4-5.9,8.35-14.48,8.22-23.16,8.09l-63.05,0c-8.33,0-15.14,2.95-18.69,11.15-3.65,8.43,3.59,16.4,3.59,16.4,5.9-8.35,14.49-8.22,23.15-8.09l55.47,0s-4,0,7.58-.07C412,59.73,419,56.95,422.35,48.67Z'></path>{' '}
                  </g>{' '}
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <span className='sr-only'>
                      Close menu
                    </span>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='mt-6'></div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Pricing
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Docs
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Enterprise
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Blog
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Help Center
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Guides
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Security
                </a>

                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Events
                </a>
              </div>
              <div>
                <a
                  href='#'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?
                  <a
                    href='#'
                    className='text-indigo-600 hover:text-indigo-500'
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
