import React from 'react';

const LikesSection = ({ articleName, likes, setArticleInfo }) => {
    const likeArticle = async () => {
        const result = await fetch(`/api/analytics/${articleName}/like`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div id="upvotes-section">
            <button className="button" onClick={() => likeArticle()}>Like</button>
            <p>{likes} likes</p>
        </div>
    );
}

export default LikesSection;