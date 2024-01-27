import React, { useState } from 'react';
import './index.css';

const ResultScreen = ({ resultPercentage }) => {
    return (
        <div className='ResultScreen'>
            <div className='ResultBoxes'>
                <section className="result-number-container">
                    <div className='result-rectangle'>
                        <div className="result-number">
                            <span>{resultPercentage} 21%</span>
                            <div className='result-number-text'>Carbon Footprint emitted</div>
                        </div>
                    </div>
                </section>

                <section className='result-fact-1-container'>
                    <div className='fact-1-rectangle'>
                        <div className='fact-1-text'>
                            Your footprint is equal to x tonnes.
                        </div>
                    </div>
                </section>

                <section className='result-fact-2-container'>
                    <div className='fact-2-rectangle'>
                        <div className='fact-2-text'>
                            The average Pakistani emits xyz tonnes daily.
                        </div>
                    </div>
                </section>
            </div>
            <section className='breakdown-container'>
                <div className='breakdown-rectangle'>
                    <div className='breakdown-text'>The breakdown of your Carbon Footprint is as follows:</div>
                </div>
            </section>
        </div>
    );
};

export default ResultScreen;