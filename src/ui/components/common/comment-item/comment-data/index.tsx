import React from 'react';
import { CommentDataPropsType } from './model';
const CommentData: React.FC<CommentDataPropsType> = ({
  data,
}) => {
  const { up_votes, replies, down_votes } = data;
  return (
    <span className='text-gray-600 inline-flex items-center leading-none text-sm'>
      <span className='cursor-pointer flex items-center mr-1 transition duration-500 transform hover:scale-150'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-4 h-4 mr-1 text-red-500'
        >
          <path
            fillRule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clipRule='evenodd'
          />
        </svg>
        <span className='text-gray-400'>{up_votes}</span>
      </span>

      <span className='flex cursor-pointer items-center mr-1 transition duration-500 transform hover:scale-150'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='h-4 w-4 mr-1 ml-2 text-gray-400'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
        <span className='text-gray-400'>
          {replies.length > 0 ? replies.length : '0'}
        </span>
      </span>

      <span className='flex cursor-pointer items-center ml-1 transition duration-500 transform hover:scale-150'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-4 h-4 mr-1 text-gray-500'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </span>
        <span className='text-gray-400'>{down_votes}</span>
      </span>
    </span>
  );
};
export default CommentData;
