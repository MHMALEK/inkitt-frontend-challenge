import React from 'react';
import BaseButton from '../../base/base-button';
import BaseTextarea from '../../base/base-textarea';

// types
import { CommentTextAreaPropsType } from './model';

const AddNewCommentArea: React.FC<CommentTextAreaPropsType> = ({
  onChange,
  value,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='w-full px-2 pt-2'
      >
        <div className='flex flex-wrap  mb-6'>
          <div className='w-full md:w-full px-3 mb-2 mt-2'>
            <BaseTextarea
              className=' shadow-lg rounded border border-gray-200 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white text-sm'
              name='body'
              placeholder='Type Your Comment and share your ideas!'
              value={value}
              onChange={onChange}
            />
          </div>
          <div className='w-full md:w-full flex items-start md:w-full px-3'>
            <div className='flex items-start w-1/2 text-gray-700 px-2 mr-auto'></div>
            <div className='-mr-1'>
              <BaseButton onClick={handleSubmit}>
                Post Comment
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddNewCommentArea;
