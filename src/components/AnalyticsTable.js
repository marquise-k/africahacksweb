import React from 'react';

const AnalyticsTable = ({ analytics }) => (
    <div className="analytics">
    <p>Summary of KPIs from your campaigns</p>
    <div className="table-header">
    <p className="column">
        Top Location
    </p>
    <p className="column">
        Repeat Visits
    </p>
    <p className="column">
        Page Views
    </p>
    <p className="column">
        Average Duration
    </p>
    </div>
    {analytics.map((analytic, key) => (
        <div className="analytics-row" key={key}>
            <p className="column">{analytic.topLocation}</p>
            <p className="column">{analytic.repeatVisits}</p>
            <p className="column">{analytic.pageViews}</p>
            <p className="column">{analytic.averageDuration}</p>
        </div>
    ))}
    </div>
);

export default AnalyticsTable;