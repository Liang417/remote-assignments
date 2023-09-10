import React from 'react';
import './ContentBox.css';

const ContentBox = ({ number }) => {
  return (
    <div className="content_box">
      <h4>Content Box{number}</h4>
    </div>
  );
};

export default ContentBox;
