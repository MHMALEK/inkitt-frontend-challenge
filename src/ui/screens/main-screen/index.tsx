import React, { useEffect, useState } from 'react';

// transitions
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

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
import SampleCommentPlaceHolderLoading from 'Src/ui/components/common/place-holder-loading';

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
    <div className='container mx-auto mb-6'>
      <TransitionGroup>
        <CSSTransition
          key={2}
          timeout={1500}
          classNames='fade'
        >
          <>
            {isPending ? (
              Array.from(
                'placeholder-loading',
              ).map((item, index) => (
                <SampleCommentPlaceHolderLoading
                  key={index}
                />
              ))
            ) : (
              <>
                <TransitionGroup>
                  {comments.length > 0 &&
                    comments.map(comment => {
                      return (
                        <CSSTransition
                          key={comment.id}
                          timeout={1500}
                          classNames='fade'
                        >
                          <CommentItem
                            data={comment}
                            level={0}
                          />
                        </CSSTransition>
                      );
                    })}
                </TransitionGroup>
                <ScrollToCommentSection anchorId='d' />

                <AddNewCommentArea
                  onSubmit={addNewComment}
                  onChange={handleCommentContentChange}
                  value={commentContent}
                />
              </>
            )}
          </>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default MainScreen;
