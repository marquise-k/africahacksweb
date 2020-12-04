import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const Forum = () => (
    <>
    <div className="title-container">
    <h1 className="title">My Forum</h1>
    </div>
    <ArticlesList articles={articleContent} />
    </>
);

export default Forum;