import React from 'react';
import mockComments from '../../../../mock/data.json';

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
      {mockComments.map(comment => {
        return <Comment key={comment.id} data={comment}></Comment>;
      })}
    </>
  );
};
export default MainScreen;
