import React from 'react';
import "./styles/options.scss"

const Options = () => {
  return (
    <div className="options">
      <div className="switch">
        <div className="image">

        </div>
        <div className="user">
          <div className="id">user.name</div>
          <div className="name">User Name</div>
        </div>
        <div className="link">
          Switch
        </div>
      </div>
      <div>Follow More</div>
    </div>
  );
};

export default Options;