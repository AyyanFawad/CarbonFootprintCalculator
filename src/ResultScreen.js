import React, { useState } from 'react';
import './index.css';

const ResultScreen = ({ resultPercentage }) => {
    return (
        <div className="ResultsScreen">
            <div className="results-content">
                <div className="result-number">
                    <span>{resultPercentage}</span>
                    <span>%</span>
                </div>
            </div>
        </div>
    );
};

export default ResultScreen;