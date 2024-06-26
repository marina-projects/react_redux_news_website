import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../features/comments/commentSlice';
import './comments.css';
import { format } from 'date-fns';

const CommentsList = ({ newsID }) => {
  const dispatch = useDispatch();
  const { comments, isLoading, hasError } = useSelector(state => state.comments);

  useEffect(() => {
    if (newsID) {
      dispatch(fetchComments(newsID));
    }
  }, [dispatch, newsID]);

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Error loading comments</p>;

  return (
    <div className='comments-area div-column'>
      <h2>Comments to the article</h2>
      {comments.map(comment => (
        <div key={comment.commentId} className='comment-content div-column'>
          <p>{comment.createdAt ? format(comment.createdAt.toDate(), 'dd/MM/yyyy') : 'Date'}</p>
          <p>{comment.commentText}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
