import React from 'react';
import Post from "./Post";
import Status from "./Status";

import './styles/posts.scss'

const Posts = () => {
  return (
    <div className='posts'>
      <div className="statuses">
        {
          [...Array(10)].map((value, index, array) => {
            return <Status key={index} index={index}/>
          })
        }
      </div>
      {
        [...Array(10)].map((value, index, array) => {
          return <Post key={index} index={index}/>
        })
      }
    </div>
  );
};

export default Posts;