import React, { useCallback, useState } from 'react';
// mock data
import mockComments from '../../../../mock/final-data.json';
import { randomIdGenerator } from 'Src/utils/generator';
import commentTreeHandler from '../../../utils/comment-tree';
import update from 'immutability-helper';

console.log(commentTreeHandler);
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
  const commentsImutableData = Immutable.List(mockComments);
  const [data, setData] = useState(mockComments);
  const [name, setName] = useState('');

  const add = ({ cc, id }: any): any => {
    // // console.log(newData)
    // const newCollection = update(mockComments, {
    //   0: {
    //     replies: {
    //       0: {
    //         replies: {
    //           0: {
    //             replies: {
    //               $push: [cc],
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    // console.log(newCollection);
    // setData(newCollection);
  };
  useCallback(() => {
    null;
  }, []);

  return (
    <>
      {data.map(comment => {
        return (
          <Comment
            key={comment.id}
            data={comment}
            add={add}
          ></Comment>
        );
      })}
      <input
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={() =>
          add({
            id: Math.random(),
            user_name: name,
            created_date: '',
            up_votes: 10,
            down_votes: 20,
            replies: [],
          })
        }
      >
        add to
      </button>
    </>
  );
};
export default MainScreen;
