import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <div className="list">
            <h3 className="list-title">{article.title}</h3>
            <p className="list-description">{article.content[0].substring(0, 200)}...</p>
            <p className="link">Learn More</p>
            </div>
        </Link>
    ))}
    </>
);

export default ArticlesList;