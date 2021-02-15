import React from 'react';
import { ScrollToSectionProps } from './model';

const ScrollToCommentSection: React.FC<ScrollToSectionProps> = () => {
  const handleAnchorClick = () =>
    window.scrollTo(0, document.body.scrollHeight);
  return (
    <div
      className='sticky bottom-2 z-10 -left-4'
      onClick={handleAnchorClick}
    >
      <button className='inline-block p-3 text-center text-white transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none waves-effect  transition duration-500 transform hover:scale-150'>
        <svg
          className='w-5 h-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ScrollToCommentSection;
