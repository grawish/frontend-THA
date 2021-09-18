import React, {FC} from 'react';

interface PostProps {
  index: number
}

const Status: FC<PostProps> = ({index}) => {
  return (
    <div className="status">
      <div className="wrap">
        <div className="image" style={{backgroundImage:`url(https://picsum.photos/100?s=${index})`}}/>
      </div>
      user_{index}
    </div>
  );
};

export default Status;