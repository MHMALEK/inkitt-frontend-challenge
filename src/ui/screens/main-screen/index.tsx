import React from 'react';
const comments = [
  {
    id: 0,
    user_name: 'Melisandra',
    created_date: '',
    up_votes: 10,
    down_votes: 20,
    replies: [
      {
        id: 1,
        user_name: 'Sara',
        created_date: '',
        up_votes: 10,
        down_votes: 20,
        replies: [
          {
            id: 2,
            user_name: 'Jhon',
            created_date: '',
            up_votes: 10,
            down_votes: 20,
            replies: [
              {
                id: 10,
                user_name: 'Gholam',
                created_date: '',
                up_votes: 10,
                down_votes: 20,
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        user_name: 'Paul',
        created_date: '',
        up_votes: 10,
        down_votes: 20,
        replies: [],
      },
      {
        id: 4,
        user_name: 'Ali',
        created_date: '',
        up_votes: 10,
        down_votes: 20,
        replies: [],
      },
    ],
  },
  {
    id: 5,
    user_name: 'Clay',
    created_date: '',
    up_votes: 10,
    down_votes: 20,
    replies: [],
  },
  {
    id: 6,
    user_name: 'Harry',
    created_date: '',
    up_votes: 10,
    down_votes: 20,
    replies: [
      {
        id: 9,
        user_name: 'Harry Sec',
        created_date: '',
        up_votes: 10,
        down_votes: 20,
        replies: [
          {
            id: 11,
            user_name: 'Harry third',
            created_date: '',
            up_votes: 10,
            down_votes: 20,
            replies: [
              {
                id: 12,
                user_name: 'Harry four',
                created_date: '',
                up_votes: 10,
                down_votes: 20,
                replies: [
                  {
                    id: 12,
                    user_name: 'Harry five',
                    created_date: '',
                    up_votes: 10,
                    down_votes: 20,
                    replies: [],
                  },
                  {
                    id: 12,
                    user_name: 'Harry six',
                    created_date: '',
                    up_votes: 10,
                    down_votes: 20,
                    replies: [],
                  },
                  {
                    id: 12,
                    user_name: 'Harry 8',
                    created_date: '',
                    up_votes: 10,
                    down_votes: 20,
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    user_name: 'Hermione',
    created_date: '',
    up_votes: 10,
    down_votes: 20,
    replies: [],
  },
  {
    id: 12,
    user_name: 'Hermione Second',
    created_date: '',
    up_votes: 10,
    down_votes: 20,
    replies: [],
  },
];

const Comment: React.FC<any> = ({ data }) => {
  return (
    <div style={{ borderLeft: '1px solid gray', marginLeft: 20 }}>
      id is {data.id} - name: {data.user_name}
      {data.replies &&
        data.replies.map((item: any, index: number) => (
          <Comment key={index} data={item} />
        ))}
    </div>
  );
};

const MainScreen = () => {
  return (
    <>
      {comments.map(comment => {
        return <Comment key={comment.id} data={comment}></Comment>;
      })}
    </>
  );
};
export default MainScreen;
