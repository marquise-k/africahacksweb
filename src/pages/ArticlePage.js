import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import ReviewsList from '../components/ReviewsList';
import LikesSection from '../components/LikesSection';
import AddReviewForm from '../components/AddReviewForm';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ likes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/analytics/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <div className="forum">
        <h1 className="title">{article.title}</h1>
        <LikesSection articleName={name} likes={articleInfo.likes} setArticleInfo={setArticleInfo} />
        <div className="content">
            {article.content.map((paragraph, key) => (
                 <p key={key}>{paragraph}</p>
            ))}
        </div>
        <ReviewsList comments={articleInfo.comments} />
        <AddReviewForm articleName={name} setArticleInfo={setArticleInfo} />
        <h3 className="other-articles">Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </div>
    );
}

export default ArticlePage;