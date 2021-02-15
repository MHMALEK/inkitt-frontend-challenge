import React, { useState } from 'react';
import { randomIdGenerator } from 'Src/utils/generator';

// transitions
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

// types
import CommentItemProps, { CommentItemType } from './model';

// immutable helper
import update from 'immutability-helper';
import DEFAULT_PARAMS from 'Src/contstants';
import AddNewCommentArea from '../comment-form';
import BaseButton from '../../base/base-button';
import convertIsoStringToDate from 'Src/utils/date';
import BaseLoading from '../../base/base-loading';
import CommentData from './comment-data';

const CommentItem: React.FC<CommentItemProps> = ({
  data,
  level,
}) => {
  const [commentData, setCommentData] = useState(data);
  const [showLoading, setShowLoading] = useState(false);
  const [
    showAddCommentForm,
    setShowAddCommentForm,
  ] = useState(false);
  const [commentContent, setCommentContent] = useState('');

  const addNewCommentHandler = () => {
    setShowLoading(true);
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
    // make a loding status for better ui
    setTimeout(() => setShowLoading(false), 2400);

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
    content,
    avatar_url,
  } = commentData;
  return (
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
            <CommentData data={commentData} />
          </div>
          {showLoading ? (
            <div className='justify-center flex items-center text-center'>
              <BaseLoading />
            </div>
          ) : (
            <CSSTransition
              in={showAddCommentForm}
              timeout={500}
              classNames='fade'
              unmountOnExit={true}
            >
              <AddNewCommentArea
                onChange={handleCommentContentChange}
                onSubmit={addNewCommentHandler}
                value={commentContent}
              />
            </CSSTransition>
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
  );
};
export default CommentItem;
