import React, { useEffect, useRef, useState } from 'react';
import { randomIdGenerator } from 'Src/utils/generator';
// types
import CommentItemProps, { CommentItemType } from './model';

// immutable helper
import update from 'immutability-helper';
import DEFAULT_PARAMS from 'Src/contstants';
import AddNewCommentArea from '../comment-form';
import BaseButton from '../../base/base-button';
import convertIsoStringToDate from 'Src/utils/date';

const CommentItem: React.FC<CommentItemProps> = ({
  data,
  level,
}) => {
  const [commentData, setCommentData] = useState(data);
  const [
    showAddCommentForm,
    setShowAddCommentForm,
  ] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const addNewCommentHandler = () => {
    const today = convertIsoStringToDate(
      new Date().toISOString(),
    );
    const newComment = {
      id: randomIdGenerator(5),
      user_name: DEFAULT_PARAMS.defaultUserName,
      created_date: today,
      up_votes: 10,
      down_votes: 20,
      replies: [],
      content: commentContent,
      avatar_url: DEFAULT_PARAMS.defaultAvatarUrl,
    };
    const currentData = commentData;

    const newCollection = update(currentData, {
      replies: {
        $push: [newComment],
      },
    });
    setCommentData(newCollection);
    setShowAddCommentForm(false);
    setCommentContent('');
  };

  const handleToggleCommentForm = () => {
    setShowAddCommentForm(prevState => !prevState);
  };

  const handleCommentContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void = ({ target: { value } }) => {
    setCommentContent(value);
  };

  const {
    user_name,
    created_date,
    up_votes,
    down_votes,
    replies,
    content,
    avatar_url,
  } = commentData;
  return (
    <div className='container mx-auto'>
      <div className='px-3 pt-3 pb-3'>
        <div className='text-xs border-2 border-gray-200 shadow-lg bg-white rounded-lg overflow-hidden'>
          <div className='pt-3 pb-6 px-6 bg-white'>
            <div className='flex items-center'>
              <picture className='mr-2'>
                <img
                  src={avatar_url}
                  className='relative z-30 inline object-contain w-8 h-8 border-2 border-gray-200 rounded-full'
                  alt={`${user_name}-avatar`}
                />
              </picture>
              <p className='tracking-widest text-sm title-font font-medium text-gray-500 mb-1'>
                {user_name}
              </p>
            </div>

            <p className='mb-3 mt-4 ml-2 text-sm text-gray-500'>
              {content}
            </p>
            <div className='flex ml-2 items-center flex-wrap '>
              <a className='text-indigo-500 text-sm inline-flex items-center md:mb-2 lg:mb-0'>
                <BaseButton
                  onClick={handleToggleCommentForm}
                  className='flex items-center text-xs inline-block px-6 leading-6 text-center text-gray-400  transition bg-transparent border-2 rounded-full ripple hover:bg-green-300 hover:text-white hover:border-white focus:outline-none waves-effect'
                >
                  <span>Reply</span>
                </BaseButton>
              </a>
              <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5 mr-2 text-gray-400'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                {convertIsoStringToDate(created_date)}
              </span>

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
                  <span className='text-gray-400'>
                    {up_votes}
                  </span>
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
                    {replies.length > 0
                      ? replies.length
                      : '0'}
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
                  <span className='text-gray-400'>
                    {down_votes}
                  </span>
                </span>
              </span>
            </div>
            {showAddCommentForm && (
              <AddNewCommentArea
                onChange={handleCommentContentChange}
                onSubmit={addNewCommentHandler}
                value={commentContent}
              />
            )}
          </div>
          {commentData.replies &&
            commentData.replies.map(
              (item: CommentItemType) => (
                <CommentItem
                  level={level + 1}
                  key={item.id}
                  data={item}
                />
              ),
            )}
        </div>
      </div>
    </div>
  );
};
export default CommentItem;
