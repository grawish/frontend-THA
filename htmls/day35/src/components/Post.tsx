import React, {FC} from 'react';

interface PostProps {
  index: number
}

const Post: FC<PostProps> = ({index}) => {
  return (
    <div className="post">
      <div className="user">
        <div className="image" style={{backgroundImage:`url(https://picsum.photos/100?u=${index})`}}/>
        <div className="name">
          user.{index}
        </div>
      </div>
      <div className="media">
        <div className="image" style={{backgroundImage:`url(https://picsum.photos/${Math.floor(300+(Math.random()*400))}?m=${index})`}}/>
      </div>
    </div>
  );
};

export default Post;