import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../features/comments/commentSlice';
import './comment-form.css';

const CommentForm = ({ newsID }) => {
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();
  const { isLoading, hasError } = useSelector((state) => state.comments);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      dispatch(addComment({ newsID, commentText }));
      setCommentText('');
    }
  };

  return (
    <div className="comment-form div-column">
      <div className='comment-form-content div-column'>
        <h3>What do you think?</h3>
        <p>Leave a comment</p>
        <form onSubmit={handleSubmit} className='div-column'>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add your comment..."
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding Comment...' : 'Add Comment'}
          </button>
        </form>
        {hasError && <p className="error">Failed to add comment. Please try again.</p>}
      </div>
      
    </div>
  );
};

export default CommentForm;
