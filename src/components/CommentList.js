import React from 'react';
import {connect} from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>)
  return (
    <div>
      <ul className='comment-list'>{list}</ul>
    </div>
  );
};

export default connect(
  (state) => {
    return state;
  }
)(CommentList);
