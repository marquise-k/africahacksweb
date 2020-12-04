import React, { useState, useEffect } from 'react';
import AnalyticsTable from '../components/AnalyticsTable';

const rootClass = 'homepage';
const HomePage = () => {
    const [analyticsList, setAnalyticsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/analytics/`);
            const body = await result.json();
            console.log(result);
            console.log(body);
            setAnalyticsList(body);
        }
        fetchData();
    }, []);

    return (
    <>
    <div className="title-container">
    <h1 className="title">My Dashboard</h1>
    </div>
    <div className="analytics-container">
    <h2 className="subtitle">
        Analytics
    </h2>
    <AnalyticsTable analytics ={analyticsList} />
    </div>
    </>
);
};

export default HomePage;