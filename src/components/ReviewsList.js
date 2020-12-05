import React from 'react';

const ReviewsList = ({ comments }) => (
    <>
    <h3>Reviews:</h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
    </>
);

export default ReviewsList;