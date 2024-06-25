import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../features/comments/commentSlice';

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
    <div>
      {comments.map(comment => (
        <div key={comment.commentId}>
          <p>{comment.commentText}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
