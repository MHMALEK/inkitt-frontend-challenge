import React, { useEffect, useState } from 'react';
// component
import CommentItem from 'Src/ui/components/common/comment-item';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  addCommentAction,
  getCommentsAction,
} from 'Store/modules/comments/action';
import { State } from 'Store/index';

// utils
import { randomIdGenerator } from 'Src/utils/generator';
import DEFAULT_PARAMS from 'Src/contstants';
import AddNewCommentArea from 'Src/ui/components/common/comment-form';
import convertIsoStringToDate from 'Src/utils/date';
import ScrollToCommentSection from 'Src/ui/components/common/scroll-to-section';

const MainScreen: React.FC<Record<string, never>> = () => {
  const [commentContent, setCommentContent] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector(
    (state: State) => state.commentsState.commentsList,
  );
  const isPending = useSelector(
    (state: State) => state.commentsState.isPending,
  );
  // did mount fetch comments from mock api
  useEffect(() => {
    dispatch(getCommentsAction());
  }, []);

  const handleCommentContentChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void = ({ target: { value } }) => {
    setCommentContent(value);
  };

  const addNewComment = (): void => {
    const today = convertIsoStringToDate(
      new Date().toISOString(),
    );
    dispatch(
      addCommentAction({
        id: randomIdGenerator(5),
        user_name: DEFAULT_PARAMS.defaultUserName,
        created_date: today,
        up_votes: 10,
        down_votes: 20,
        replies: [],
        content: commentContent,
        avatar_url: DEFAULT_PARAMS.defaultAvatarUrl,
      }),
    );
  };

  return (
    <>
      {comments.map(comment => {
        return (
          <CommentItem
            key={comment.id}
            data={comment}
            level={0}
          />
        );
      })}
      <ScrollToCommentSection anchorId='d' />

      <div className='px-4 pt-8 mt-10 bg-white shadow-md'>
        <div className='container mx-auto'>
          <p className='pl-2 text-gray-500 text-sm'>
            Share your ideas! what do you think?
          </p>
          <AddNewCommentArea
            onSubmit={addNewComment}
            onChange={handleCommentContentChange}
            value={commentContent}
          />
        </div>
      </div>
    </>
  );
};
export default MainScreen;
