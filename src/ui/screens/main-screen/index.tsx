import React, { useEffect, useState } from 'react';
// mock data
// utils
import { randomIdGenerator } from 'Src/utils/generator';
// immutable helper
import update from 'immutability-helper';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  addCommentAction,
  getCommentsAction,
} from 'Store/modules/comments/action';
import { State } from 'Store/index';

const Comment: React.FC<any> = ({ data, add }) => {
  const [commentData, setCommentData] = useState(data);
  return (
    <>
      <div
        style={{
          borderLeft: '1px solid gray',
          marginLeft: 20,
        }}
      >
        id is {commentData.id} - name:{' '}
        {commentData.user_name}
        {commentData.replies &&
          commentData.replies.map(
            (item: any, index: number) => (
              <Comment key={index} data={item} add={add} />
            ),
          )}
      </div>
      <button
        onClick={() => {
          const cc = {
            user_name: 'MAlekkkkkkkkkk',
            created_date: '',
            replies: [],
            id: randomIdGenerator(),
          };

          const newCollection = update(data, {
            replies: {
              $push: [cc],
            },
          });
          setCommentData(newCollection);
        }}
      >
        add to {commentData.user_name}
      </button>
    </>
  );
};

const MainScreen = () => {
  const [name, setName] = useState('');
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

  const add = (cc: any): any => {
    // const currentData = data;
    // const newCollection = update(currentData, {
    //   $push: [cc],
    // });
    // setData(newCollection);
    dispatch(addCommentAction(cc));
  };

  return (
    <>
      {comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            data={comment}
            add={add}
          />
        );
      })}
      <input
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={() =>
          add({
            id: randomIdGenerator(5),
            user_name: name,
            created_date: '',
            up_votes: 10,
            down_votes: 20,
            replies: [],
          })
        }
      >
        add to main
      </button>
    </>
  );
};
export default MainScreen;
