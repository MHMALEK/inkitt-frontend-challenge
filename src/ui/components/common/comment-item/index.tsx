import React, { useEffect, useRef, useState } from 'react';
import { randomIdGenerator } from 'Src/utils/generator';
// types
import CommentItemProps, { CommentItemType } from './model';

// immutable helper
import update from 'immutability-helper';
import DEFAULT_PARAMS from 'Src/contstants';
import AddNewCommentArea from '../comment-form';
import BaseButton from '../../base/base-button';

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
    const newComment = {
      id: randomIdGenerator(5),
      user_name: DEFAULT_PARAMS.defaultUserName,
      created_date: '',
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
    <>
      <div
        className='p-4'
        style={{
          paddingLeft: level * 30,
        }}
      >
        <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
          <div className='p-6'>
            <picture>
              <img
                src={avatar_url}
                className='relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full'
                alt={`${user_name}-avatar`}
              />
            </picture>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>
              {user_name}
            </h2>

            <p className='leading-relaxed mb-3'>
              {content}
            </p>
            <div className='flex items-center flex-wrap '>
              <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                {replies.length
                  ? replies.length
                  : 'no-reply'}
                <BaseButton
                  onClick={handleToggleCommentForm}
                >
                  Reply
                </BaseButton>
                <svg
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </a>
              <span className='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                </svg>
                {created_date}
              </span>

              <span className='text-gray-600 inline-flex items-center leading-none text-sm'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                </svg>
                {up_votes} {down_votes}
              </span>
            </div>
          </div>
          {showAddCommentForm && (
            <AddNewCommentArea
              onChange={handleCommentContentChange}
              onSubmit={addNewCommentHandler}
              value={commentContent}
            />
          )}
        </div>
      </div>

      {commentData.replies &&
        commentData.replies.map((item: CommentItemType) => (
          <CommentItem
            level={level + 1}
            key={item.id}
            data={item}
          />
        ))}
    </>
  );
};
export default CommentItem;
