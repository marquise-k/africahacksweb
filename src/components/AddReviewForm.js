import React, { useState } from 'react';

const AddReviewForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [reviewText, setReviewText] = useState('');

    const addReview = async () => {
        const result = await fetch(`/api/analytics/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: reviewText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setReviewText('');
    }

    return (
        <div id="add-comment-form">
            <h3>Leave a public review</h3>
            <label>
                Your name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Review:
                <textarea rows="4" cols="50" value={reviewText} onChange={(event) => setReviewText(event.target.value)} />
            </label>
            <button className="review-button" onClick={() => addReview()}>Add A Review</button>
        </div>
    );
}

export default AddReviewForm;